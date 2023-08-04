import { RootState } from "../store";

export const selectWorkLogs = ({ workLogs }:RootState) => workLogs.data;
