import { createSlice } from "@reduxjs/toolkit";
import { StateWorkLogs } from "../../../types/WorkLog";
import initialState from "./initialState";

const WorkLogsReducer = createSlice({
  name: "workLogs",
  initialState: initialState,
  reducers: {
    removeWorkTime(state, action) {
      state.data = state.data.map((day) => {
        return {...day, workTime: (day.workTime).filter((time) => {
            if(time.id === action.payload.id){
              return time.id !== action.payload.id
            }
            return time
        })}})
    },
    refreshWorkTime(state, action) {
      state.data = state.data.map((day) => {
        return {...day, workTime: (day.workTime).map((time) => {
            if (time.id === action.payload.id) {
              return {  
                id: action.payload.id, 
                time: `${action.payload.startTime} - ${action.payload.endTime} `
              }}
            return time;
        })}})
    },
    addWorkTime(state, action) {
      state.data = state.data.map((day) => {
        if (day.id === action.payload.id) {
          return {
            ...day,
            workTime: [
              ...day.workTime,
              { id: Math.random(), 
                time: `${action.payload.startTime} - ${action.payload.endTime}`, 
              }]
          }}
        return day;
      });
    },
  },
  extraReducers: {},
});

export default WorkLogsReducer.reducer;
export const {removeWorkTime, refreshWorkTime, addWorkTime } = WorkLogsReducer.actions;




