import axios from "axios";

import {auth} from "../endpoind.ts";

const BaseUrlApi = import.meta.env.VITE_BASE_API_URL;

const authService = {
  login: (data: APIAuth.Login.RequestPayload) => {
    return axios.post<APIAuth.Login.Response>(
      `${BaseUrlApi + auth}/login`,
      data,
    );
  },
  forgotPassword: (data: APIAuth.ForgotPassword.RequestPayload) => {
    return axios.post<APIAuth.ForgotPassword.Response>(
      `${BaseUrlApi + auth}/forgot-pass`,
      data,
    );
  },
  resetPassword: (data: APIAuth.ResetPassword.RequestPayload) => {
    return axios.post<APIAuth.ResetPassword.Response>(
      `${BaseUrlApi + auth}/update-pass`,
      data,
    );
  },
  resendOTP: (data: APIAuth.ResendOTP.RequestPayload) => {
    return axios.post<APIAuth.ResendOTP.Response>(
      `${BaseUrlApi + auth}/resend-verify-otp`,
      data,
    );
  },
  verifyEmail: (data: APIAuth.VerifyEmail.RequestPayload) => {
    return axios.post<APIAuth.VerifyEmail.Response>(
      `${BaseUrlApi + auth}/verify-otp`,
      data,
    );
  },
  register: (data: APIAuth.Register.RequestPayload) => {
    return axios.post<APIAuth.Register.Response>(
      `${BaseUrlApi + auth}/register`,
      data,
    );
  },
};

export default authService;
