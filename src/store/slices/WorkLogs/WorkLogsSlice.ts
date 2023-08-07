import { createSlice } from "@reduxjs/toolkit";
import { StateWorkLogs } from "../../../types/WorkLog";
import initialState from "./initialState";

const WorkLogsReducer = createSlice({
  name: "workLogs",
  initialState: initialState,
  reducers: {
    removeWorkTime(state, {payload}) {
      state.data = state.data.map((day) => {
        return {...day, workTime: (day.workTime).filter((time) => {
            if(time.id === payload.id){
              return time.id !== payload.id
            }
            return time
        })}})
    },
    refreshWorkTime(state, {payload}) {
      state.data = state.data.map((day) => {
        return {...day, workTime: (day.workTime).map((time) => {
            if (time.id === payload.id) {
              return {  
                id: payload.id, 
                time: `${payload.startTime} - ${payload.endTime} `
              }}
            return time;
        })}})
    },
    addWorkTime(state, {payload}) {
      state.data = state.data.map((day) => {
        if (day.id === payload.id) {
          return {
            ...day,
            workTime: [
              ...day.workTime,
              { id: Math.random(), 
                time: `${payload.startTime} - ${payload.endTime}`, 
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




