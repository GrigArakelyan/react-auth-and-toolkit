import { RootState } from "../store";

export const selectCodeData = ({ loginCode }:RootState) => loginCode;
export const selectUserToken = ({ loginCode }:any) => loginCode.data.payload
