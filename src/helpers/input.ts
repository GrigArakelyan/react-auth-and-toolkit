import { ChangeEvent, FormEvent, FormEventHandler } from "react";
import { onlyNumber } from "../utils/validation";

export const formatNumberInput = (e: any):void => e.target.value = e.target.value.replace(onlyNumber, "")