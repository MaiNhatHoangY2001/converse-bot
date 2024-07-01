import { zodResolver } from "@hookform/resolvers/zod";
import { CircularProgress, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { authResetPassword } from "@services/api/auth-api.ts";
import { ResetPasswordSchema, ResetPasswordType } from "@utils/schema.ts";
import { isAxiosError } from "axios";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ResetPasswordType>({
    resolver: zodResolver(ResetPasswordSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ResetPasswordType) => {
    try {
      setIsLoading(true);
      if (id) {
        const bodyParams: APIAuth.ResetPassword.RequestPayload = {
          password: data.newPassword,
          token: id,
        };
        const res = await authResetPassword(bodyParams);
        if (res) {
          toast.success(res.data.message);
          navigate("/auth/login");
        }
      }
    } catch (error) {
      if (isAxiosError<APIAuth.Error>(error)) {
        toast.error(error.response?.data?.message ?? "Set password failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <Controller
        control={control}
        render={({ field }) => {
          return (
            <TextField
              variant="outlined"
              label="New Password"
              value={field.value ?? ""}
              onChange={field.onChange}
              error={Boolean(errors?.newPassword?.message)}
              helperText={errors?.newPassword?.message}
            />
          );
        }}
        name="newPassword"
      />
      <Controller
        control={control}
        render={({ field }) => {
          return (
            <TextField
              variant="outlined"
              label="Confirm Password"
              value={field.value ?? ""}
              onChange={field.onChange}
              error={Boolean(errors?.confirmPassword?.message)}
              helperText={errors?.confirmPassword?.message}
            />
          );
        }}
        name="confirmPassword"
      />

      <Button
        disabled={isLoading || !isValid}
        variant="contained"
        type="submit"
        color="secondary"
        className="h-12"
      >
        {isLoading ? <CircularProgress size={16} /> : "Set Password"}
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
