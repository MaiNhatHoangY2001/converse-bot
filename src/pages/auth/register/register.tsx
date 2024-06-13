/* eslint-disable @typescript-eslint/no-explicit-any */
import {useState} from "react";
import {
  CheckboxElement,
  PasswordElement,
  PasswordRepeatElement,
  TextFieldElement,
  useForm,
} from "react-hook-form-mui";
import toast from "react-hot-toast";
import {Link, useNavigate} from "react-router-dom";
import Btn from "@components/ui/button/btn";
import {yupResolver} from "@hookform/resolvers/yup";
import {CircularProgress, Stack} from "@mui/material";
import {authRegister} from "@services/api/auth-api";
import {IMAGES} from "@utils/constants";
import {schemaYup} from "@utils/schemaYup";
import {isAxiosError} from "axios";
import classNames from "classnames/bind";

import styles from "@pages/auth/register/register.module.scss";

const cx = classNames.bind(styles);

export default function Register() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {control, handleSubmit} = useForm({
    resolver: yupResolver(schemaYup),
  });

  const onSubmit = async (data: any) => {
    const account = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.confirmPassword,
    };
    try {
      setIsLoading(true);

      const res = await authRegister(account);
      if (res) navigate(`/auth/verify-email-register/${account.email}`);
    } catch (error) {
      if (isAxiosError<APIAuth.Error>(error))
        toast.error(error?.response?.data?.message ?? "Register failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cx([
        "container",
        "w-screen h-screen flex justify-center items-center bg-static-color pt-6 pb-6",
      ])}>
      <img
        src={IMAGES.logo}
        alt="logo"
        width={150}
        height={150}
        className={cx(["logo", "absolute top-0 right-4"])}
      />
      {/* wrp */}
      <div
        className={cx([
          "wrp",
          "w-[60%] h-fit pt-5 pr-10 pl-10 pb-16 flex flex-col justify-around bg-background-color rounded-3xl overflow-y-auto",
        ])}>
        <div className={cx(["registerTitle", "text-4xl font-semibold"])}>
          Register
        </div>
        <div className={cx(["txt", "text-[#626262] mt-1 mb-4"])}>
          Let&apos;s get you all st up so you can access your personal account.
        </div>

        {/* register form */}
        <form
          className={cx(["register-form"])}
          onSubmit={handleSubmit(onSubmit)}
          noValidate>
          <Stack spacing={2}>
            {/* top */}
            <div className={cx(["register-form__top", "flex flex-col gap-6"])}>
              {/* first-last-name */}
              <div className={cx(["name-row", "grid grid-cols-6 gap-5"])}>
                <TextFieldElement
                  className="col-span-3"
                  name="firstName"
                  label="First Name"
                  size="small"
                  control={control}
                />
                <TextFieldElement
                  className="col-span-3"
                  name="lastName"
                  label="Last Name"
                  size="small"
                  control={control}
                />
              </div>
              {/* email */}
              <TextFieldElement
                name="email"
                label="Email"
                type="email"
                size="small"
                control={control}
              />
              {/* pw */}
              <PasswordElement
                label="Password"
                name="password"
                size="small"
                control={control}
              />
              {/* confirm-pw | rules required not working and replace by yup */}
              <PasswordRepeatElement
                passwordFieldName="password"
                name="confirmPassword"
                label="Confirm Password"
                size="small"
                control={control}
              />
              {/* terms */}
              <div className={cx(["terms", "flex items-center"])}>
                <CheckboxElement
                  className="terms"
                  name="check"
                  label="I agree to all the Terms and Privacy Policies"
                  size="medium"
                  control={control}
                />
              </div>
            </div>
            {/* bottom */}
            {isLoading ? (
              <CircularProgress size={16} />
            ) : (
              <div
                className={cx([
                  "register-form__bottom",
                  "flex flex-col gap-4",
                ])}>
                <Btn
                  className={cx(["registerBtn", "w-full"])}
                  type="submit"
                  onClick={() => {}}>
                  Create account
                </Btn>
                <div className="flex justify-center items-center gap-1">
                  Already have an account?
                  <Link
                    to="/auth/login"
                    className="text-primary-color font-semibold hover:text-accent-color">
                    Login
                  </Link>
                </div>
              </div>
            )}
          </Stack>
        </form>
      </div>
    </div>
  );
}
