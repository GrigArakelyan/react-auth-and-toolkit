import { loginEmailPostURL } from "../urls/loginUrl";
import { loginCodePostURL } from "../urls/loginUrl";
import { myProfileGetUrl } from "../urls/myProfileUrl";
import AxiosInstance from "../lib/instance";
import { AxiosResponse } from "axios";
import { LoginEmailPostData } from "../types/LoginEmail";
import { LoginCodePostData } from "../types/LoginCode";

export const postLoginEmail = (body:LoginEmailPostData):Promise<AxiosResponse<any, any>> =>
  AxiosInstance.post(loginEmailPostURL, body);
export const postLoginCode = (body:LoginCodePostData):Promise<AxiosResponse<any, any>> =>
  AxiosInstance.post(loginCodePostURL, body);
export const getMyProfile = ():Promise<AxiosResponse<any, any>> => AxiosInstance.get(myProfileGetUrl);
