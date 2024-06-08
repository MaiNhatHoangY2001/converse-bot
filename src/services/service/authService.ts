import axios from "axios";
import {auth} from "../endpoind.ts";

const BaseUrlApi = import.meta.env.VITE_BASE_API_URL;

const authService = {
  login: (data: APIAuth.Login) => {
    return axios.post(`${BaseUrlApi + auth}/login`, data);
  },
};

export default authService;
