import { RootState } from "../store";

export const selectCodeData = ({ loginCode }:RootState) => loginCode;
