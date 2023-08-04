import { RootState } from "../store";

export const selectEmailData = ({ loginEmail }:RootState) => loginEmail;
