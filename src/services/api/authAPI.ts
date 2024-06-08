import authService from "../service/authService.ts";

export const authLogin = (data: APIAuth.Login) => {
  return authService.login(data);
};
