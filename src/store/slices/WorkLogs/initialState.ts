import { WeekData } from "../../../pages/UserProfile/components/WorkLogs/config";
import { StateWorkLogs } from "../../../types/WorkLog";

const initialState:StateWorkLogs = {
   data: WeekData,
   loading: false,
   error: "",
}

export default initialState