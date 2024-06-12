import {useEffect, useMemo, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {redirect, useNavigate, useParams} from "react-router-dom";
import {zodResolver} from "@hookform/resolvers/zod";
import useCountdown from "@hooks/use-countdown.ts";
import {Box, CircularProgress, FormHelperText} from "@mui/material";
import Button from "@mui/material/Button";
import {authResendOTP, authVerifyEmail} from "@services/api/auth-api.ts";
import {numberToTime} from "@utils/libs.ts";
import {VerifyEmailSchema, VerifyEmailType} from "@utils/schema.ts";
import {isAxiosError} from "axios";
import {MuiOtpInput} from "mui-one-time-password-input";

const FormVerifyEmail = () => {
  const navigate = useNavigate();
  const {email} = useParams();
  const {current, reset} = useCountdown(0, 60 * 5);
  const isEndTime = useMemo(() => +current === 0, [current]);
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<VerifyEmailType>({
    resolver: zodResolver(VerifyEmailSchema),
  });

  const handleVerifyEmail = async (data: VerifyEmailType) => {
    try {
      setIsLoading(true);
      if (email) {
        const res = await authVerifyEmail({
          email,
          otp: data.otp,
        });
        if (res) {
          toast.success(res.data.message);
          navigate("/auth/login");
        }
      }
    } catch (error) {
      if (isAxiosError<APIAuth.VerifyEmail.ErrorVerifyEmail>(error)) {
        toast(error.response?.data?.data[0].msg || "Verify email Failed!");
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
        toast(error.response?.data?.message || "Verify email Failed!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: VerifyEmailType) => {
    if (isEndTime) {
      await handleResendEmail();
    } else {
      await handleVerifyEmail(data);
    }
  };

  useEffect(() => {
    if (!email) redirect("/");
  }, [email]);

  return (
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
        <span>{numberToTime(+current)}</span>
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
  );
};

export default FormVerifyEmail;
