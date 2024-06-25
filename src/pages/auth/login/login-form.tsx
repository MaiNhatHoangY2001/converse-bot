import { zodResolver } from "@hookform/resolvers/zod";
import useLoginLogic from "@hooks/useLoginLogic.tsx";
import { Button, CircularProgress, Link } from "@mui/material";
import { ROUTER } from "@utils/constants.ts";
import { LoginSchema, LoginType } from "@utils/schema.ts";
import { FC, useMemo } from "react";
import {
  FormContainer,
  PasswordElement,
  TextFieldElement,
  useForm,
} from "react-hook-form-mui";

const ForgotPasswordLink = () => {
  return (
    <p className="text-right text-sm font-medium capitalize">
      <Link href="/auth/forgot-password" underline="none">
        forget password
      </Link>
    </p>
  );
};

const SubmitLoginButton: FC<
  Readonly<{
    isLoading: boolean;
    isDisabled: boolean;
  }>
> = ({ isDisabled, isLoading }) => {
  return (
    <Button
      disabled={isDisabled}
      type="submit"
      className="flex h-12 gap-4"
      variant="contained"
      color="secondary"
    >
      {isLoading ? <CircularProgress size={16} /> : "Login"}
    </Button>
  );
};

const RegisterLink = () => {
  return (
    <p className="text-center text-sm font-semibold">
      <span className="font-medium">Don’t have account? </span>
      <Link
        color="primary"
        className=""
        href={ROUTER.auth.register}
        underline="none"
      >
        Register
      </Link>
    </p>
  );
};

const LoginForm = () => {
  const { onSubmit, isLoading } = useLoginLogic();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const isDisabled = useMemo<boolean>(
    () => !isValid || isLoading,
    [isLoading, isValid],
  );

  return (
    <FormContainer onSuccess={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-8 max-sm:gap-4">
        <TextFieldElement
          name="email"
          label="Email"
          control={control}
          required
          fullWidth
        />
        <PasswordElement
          control={control}
          name="password"
          label="Password"
          required
          fullWidth
        />

        <ForgotPasswordLink />

        <SubmitLoginButton isDisabled={isDisabled} isLoading={isLoading} />

        <RegisterLink />
      </div>
    </FormContainer>
  );
};

export default LoginForm;
