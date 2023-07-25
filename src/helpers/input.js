import { onlyNumber } from "../utils/validation";

export const formatNumberInput = (e) => e.target.value = e.target.value.replace(onlyNumber, "")