import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {zodResolver} from "@hookform/resolvers/zod";
import {CircularProgress, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {authForgotPassword} from "@services/api/auth-api.ts";
import {SendEmailSchema, SendEmailType} from "@utils/schema.ts";
import {isAxiosError} from "axios";

const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors, isValid},
  } = useForm<SendEmailType>({
    resolver: zodResolver(SendEmailSchema),
  });

  const onSubmit = async (data: SendEmailType) => {
    try {
      setIsLoading(true);
      const res = await authForgotPassword(data);
      const {message} = res.data;
      if (message) {
        // Notify when server send successfully
        toast.success(message);

        // add email into url query params
        const search = new URLSearchParams();
        search.append("email", data.email);

        // reset text field email
        reset();
      }
    } catch (error) {
      if (isAxiosError<APIAuth.Error>(error)) {
        toast.error(error.response?.data?.message ?? "Send email failed!");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-8">
      <Controller
        control={control}
        render={({field}) => {
          return (
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={field.value ?? ""}
              onChange={field.onChange}
              error={Boolean(errors?.email)}
              helperText={errors?.email?.message}
            />
          );
        }}
        name="email"
      />

      <Button
        fullWidth
        type="submit"
        disabled={isLoading || !isValid}
        className="h-12 flex gap-4"
        variant="contained"
        color="secondary">
        {isLoading ? <CircularProgress size={16} /> : "Submit"}
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
