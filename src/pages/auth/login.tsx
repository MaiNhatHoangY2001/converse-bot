import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import TextInputPassword from "@components/ui/text-field/text-input-password.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import {CircularProgress, Divider, Link, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {authLogin, authResendOTP} from "@services/api/auth-api.ts";
import {LoginSchema, LoginType} from "@utils/schema.ts";
import {isAxiosError} from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const resendOTP = async (email: string) => {
    try {
      setIsLoading(true);
      const res = await authResendOTP({email});
      if (res) {
        navigate(`/auth/verify-email/${email}`);
      }
    } catch (errors) {
      if (isAxiosError<APIAuth.Error>(errors)) {
        toast.error(errors.response?.data?.message ?? "Resend OTP Failed!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: LoginType) => {
    try {
      setIsLoading(true);
      const res = await authLogin(data);
      const accessToken = res.data?.data?.token;

      if (accessToken) {
        toast.success(res.data.message);
        localStorage.setItem("accessToken", accessToken);
        navigate("/");
      }
    } catch (error) {
      if (isAxiosError<APIAuth.Error>(error)) {
        toast.error(error?.response?.data?.message ?? "Login failed!");
        if (error.response?.data?.code === 103) {
          await resendOTP(data.email);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-dvh w-screen items-center justify-center bg-background-color p-4">
      <section className="container mx-auto flex gap-14 rounded-3xl bg-black/5 p-14 max-sm:px-4">
        <article className="flex flex-1 flex-col gap-16 max-sm:gap-12">
          <hgroup className="flex flex-col gap-4 max-sm:items-center">
            <h1 className="text-5xl font-semibold max-sm:text-3xl">Login</h1>
            <p className="text-base font-normal">
              Login to access your traverse account
            </p>
          </hgroup>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8 max-sm:gap-4">
            <Controller
              control={control}
              render={({field}) => {
                return (
                  <TextField
                    onChange={field.onChange}
                    label="Email"
                    type="email"
                    value={field.value ?? ""}
                  />
                );
              }}
              name="email"
            />

            <Controller
              control={control}
              name="password"
              render={({field}) => {
                return (
                  <TextInputPassword
                    value={field.value ?? ""}
                    onChange={field.onChange}
                  />
                );
              }}
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
              color="secondary">
              {isLoading ? <CircularProgress size={16} /> : "Login"}
            </Button>

            <p className="text-center text-sm font-semibold">
              <span className="font-medium">Don’t have account? </span>
              <Link
                color="primary"
                className=""
                href="/auth/register"
                underline="none">
                Register
              </Link>
            </p>
          </form>

          <Divider>
            <p className="text-sm text-[#313131]">Or login with</p>
          </Divider>

          <Button
            disabled
            className="h-12"
            variant="outlined"
            color="secondary">
            Login with Google
          </Button>
        </article>

        <article className="flex flex-1 items-center justify-center max-lg:hidden">
          <img
            src="https://converse-storage.s3.ap-southeast-1.amazonaws.com/img-login.png"
            alt="img"
          />
        </article>
      </section>
    </main>
  );
};

export default LoginPage;
