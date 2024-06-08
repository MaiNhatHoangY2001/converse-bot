import {CircularProgress, Divider, Link, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import TextInputPassword from "@components/common/TextInputPassword.tsx";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginSchema, LoginType} from "../../utils/schema.ts";
import {useState} from "react";
import {authLogin} from "../../services/api/authAPI.ts";
import toast from "react-hot-toast";
import {AxiosError} from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginType) => {
    try {
      setIsLoading(true);
      const res = await authLogin(data);
      const accessToken = res?.data?.data?.token;

      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        navigate("/");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-screen min-h-dvh bg-primary-color flex justify-center items-center p-4">
      <section className="container mx-auto flex gap-14 bg-black/5 p-14 max-sm:px-4 rounded-3xl">
        <article className="flex-1 flex flex-col gap-16 max-sm:gap-12">
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

            <p className="text-right text-sm font-medium">
              <Link href="/" underline="none">
                forget password
              </Link>
            </p>

            <Button
              disabled={!isValid || isLoading}
              type="submit"
              className="h-12 flex gap-4"
              variant="contained"
              color="secondary">
              {isLoading && <CircularProgress size={16} />}
              Login
            </Button>

            <p className="text-center text-sm font-semibold">
              <span className="font-medium">Don’t have account? </span>
              <Link color="primary" className="" href="/" underline="none">
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

        <article className="flex-1 flex justify-center items-center max-lg:hidden">
          <img
            src="https://converse-storage.s3.ap-southeast-1.amazonaws.com/img-login.png"
            alt="img"
          />
        </article>
      </section>
    </main>
  );
};

export default Login;
