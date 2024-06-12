import authService from "../service/auth-service.ts";

export const authLogin = (data: APIAuth.Login.RequestPayload) => {
  return authService.login(data);
};

export const authForgotPassword = async (
  data: APIAuth.ForgotPassword.RequestPayload,
) => {
  return authService.forgotPassword(data);
};

export const authResetPassword = (
  data: APIAuth.ResetPassword.RequestPayload,
) => {
  return authService.resetPassword(data);
};

export const authResendOTP = (data: APIAuth.ResendOTP.RequestPayload) => {
  return authService.resendOTP(data);
};

export const authVerifyEmail = (data: APIAuth.VerifyEmail.RequestPayload) => {
  return authService.verifyEmail(data);
};
