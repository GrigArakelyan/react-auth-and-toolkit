import { loginEmailPostURL } from "../urls/loginUrl";
import { loginCodePostURL } from "../urls/loginUrl";
import { myProfileGetUrl } from "../urls/myProfileUrl";
import AxiosInstance from "../lib/instance";

export const postLoginEmail = (body) =>
  AxiosInstance.post(loginEmailPostURL, body);
export const postLoginCode = (body) =>
  AxiosInstance.post(loginCodePostURL, body);
export const getMyProfile = () => AxiosInstance.get(myProfileGetUrl);
