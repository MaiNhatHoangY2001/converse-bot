import { authLogin, authResendOTP } from "@services/api/auth-api.ts";
import { LoginType } from "@utils/schema.ts";
import { isAxiosError } from "axios";
import { useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UseLoginLogic = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const resendOTP = useCallback(
    async (email: string) => {
      try {
        setIsLoading(true);
        const res = await authResendOTP({ email });
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
    },
    [navigate],
  );

  const onSubmit = useCallback(
    async (data: LoginType) => {
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
    },
    [navigate, resendOTP],
  );

  return useMemo(() => {
    return {
      isLoading,
      onSubmit,
    };
  }, [isLoading, onSubmit]);
};

export default UseLoginLogic;
