import { loginEmailPostURL } from "../urls/loginUrl";
import { loginCodePostURL } from "../urls/loginUrl";
import { myProfileGetUrl } from "../urls/myProfileUrl";
import AxiosInstance from "../lib/instance";
import { AxiosResponse } from "axios";
import { LoginEmailPostData } from "../types/LoginEmail";
import { LoginCodePostData } from "../types/LoginCode";
import { GeneralInfoData } from "../types/GeneralInfo";

export const postLoginEmail = (body:LoginEmailPostData) =>
  AxiosInstance.post(loginEmailPostURL, body);
export const postLoginCode = (body:LoginCodePostData) =>
  AxiosInstance.post(loginCodePostURL, body);
export const getMyProfile = ():Promise<AxiosResponse<GeneralInfoData>> => AxiosInstance.get(myProfileGetUrl);
