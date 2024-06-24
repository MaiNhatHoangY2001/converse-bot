import {useEffect, useMemo, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {redirect, useNavigate, useParams} from "react-router-dom";
import AuthHeader from "@components/common/auth-header";
import BackButton from "@components/ui/button/btn";
import {zodResolver} from "@hookform/resolvers/zod";
import useCountdown from "@hooks/use-countdown.ts";
import {ArrowBackIos} from "@mui/icons-material";
import {Box, CircularProgress, FormHelperText} from "@mui/material";
import Button from "@mui/material/Button";
import {authResendOTP, authVerifyEmail} from "@services/api/auth-api.ts";
import {END_TIME, HEADER_VERIFY_EMAIL} from "@utils/constants.ts";
import {convertNum2Time} from "@utils/libs.ts";
import {VerifyEmailSchema, VerifyEmailType} from "@utils/schema.ts";
import {isAxiosError} from "axios";
import {MuiOtpInput} from "mui-one-time-password-input";

export default function VerifyEmailRegister() {
  const navigate = useNavigate();

  const {title, subTitle} = HEADER_VERIFY_EMAIL;

  const {email} = useParams();
  const {current, reset} = useCountdown(0, END_TIME);
  const isEndTime = useMemo(() => +current === 0, [current]);
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<VerifyEmailType>({
    resolver: zodResolver(VerifyEmailSchema),
  });

  const handleVerifyEmailRegister = async (data: VerifyEmailType) => {
    try {
      setIsLoading(true);
      if (email) {
        const res = await authVerifyEmail({
          email,
          otp: data.otp,
        });
        if (res) {
          toast.success(res.data.message);
          navigate("/auth/welcome");
        }
      }
    } catch (error) {
      if (isAxiosError<APIAuth.VerifyEmail.ErrorVerifyEmail>(error)) {
        toast(
          error.response?.data?.data[0].msg ?? "Verify email register Failed!",
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendEmail = async () => {
    try {
      setIsLoading(true);
      if (email) {
        const res = await authResendOTP({
          email,
        });
        if (res) {
          toast.success(res.data.message);
          reset();
        }
      }
    } catch (error) {
      if (isAxiosError<APIAuth.Error>(error)) {
        toast(error.response?.data?.message ?? "Verify email Failed!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: VerifyEmailType) => {
    if (isEndTime) {
      await handleResendEmail();
    } else {
      await handleVerifyEmailRegister(data);
    }
  };

  useEffect(() => {
    if (!email) redirect("/");
  }, [email]);

  return (
    <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md space-y-8 bg-black/5 p-8 rounded-3xl">
      <BackButton
        className="flex items-center"
        type="button"
        onClick={() => {
          navigate(-1);
        }}>
        <ArrowBackIos fontSize="small" />
        Back to register
      </BackButton>
      <AuthHeader title={title} subTitle={subTitle} />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="otp"
          control={control}
          render={({field, fieldState}) => (
            <Box>
              <MuiOtpInput
                TextFieldsProps={{disabled: isEndTime}}
                sx={{gap: 1}}
                {...field}
                length={6}
              />
              {fieldState.invalid ? (
                <FormHelperText error>OTP invalid</FormHelperText>
              ) : null}
            </Box>
          )}
        />
        <p className="flex justify-between text-sm">
          <span>Did not receive a code? Resend</span>
          <span>{convertNum2Time(+current)}</span>
        </p>
        {isEndTime ? (
          <Button
            onClick={() => handleResendEmail()}
            fullWidth
            variant="contained"
            color="secondary"
            type="button"
            className="h-12">
            {isLoading ? <CircularProgress size={16} /> : "Resend OTP"}
          </Button>
        ) : (
          <Button
            disabled={isLoading || !isValid}
            fullWidth
            variant="contained"
            color="secondary"
            type="submit"
            className="h-12">
            {isLoading ? <CircularProgress size={16} /> : "Verify"}
          </Button>
        )}
      </form>
    </main>
  );
}
