import { zodResolver } from "@hookform/resolvers/zod";
import useLoginLogic from "@hooks/useLoginLogic.tsx";
import { CircularProgress, Link } from "@mui/material";
import Button from "@mui/material/Button";
import { ROUTER } from "@utils/constants.ts";
import { LoginSchema, LoginType } from "@utils/schema.ts";
import {
  FormContainer,
  PasswordElement,
  TextFieldElement,
  useForm,
} from "react-hook-form-mui";

const LoginForm = () => {
  const { onSubmit, isLoading } = useLoginLogic();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

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

        <p className="text-right text-sm font-medium capitalize">
          <Link href="/auth/forgot-password" underline="none">
            forget password
          </Link>
        </p>

        <Button
          disabled={!isValid || isLoading}
          type="submit"
          className="flex h-12 gap-4"
          variant="contained"
          color="secondary"
        >
          {isLoading ? <CircularProgress size={16} /> : "Login"}
        </Button>

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
      </div>
    </FormContainer>
  );
};

export default LoginForm;
