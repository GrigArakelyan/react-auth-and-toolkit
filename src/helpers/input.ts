import { ChangeEvent, FormEvent } from "react";
import { onlyNumber } from "../utils/validation";

export const formatNumberInput = (e: ChangeEvent<HTMLInputElement>):string => e.target.value = e.target.value.replace(onlyNumber, "")