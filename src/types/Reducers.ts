import { GeneralInfoData } from "./GeneralInfo";

export interface InitialState {
  data: object;
  loading: boolean;
  error: string | undefined;
}

export interface InitialStateGeneralInfo {
  data: GeneralInfoData;
  loading: boolean;
  error: string | undefined;
}