import { WorkLogType } from "../../../../types/WorkLog";

export const WeekData:WorkLogType = [
  {
    title: "Sunday",
    workTime: [
      { id: Math.random(), time: "09:00 - 12:00" }
    ],
    id: Math.random()
  },
  {
    title: "Monday",
    workTime: [
      { id: Math.random(), time: "09:00 - 12:00", },
      { id: Math.random(), time: "13:00 - 18:00", },
    ],
    id: Math.random(),
  },
  {
    title: "Tuesday",
    workTime: [
      { id: Math.random(), time: "09:00 - 12:00", },
      { id: Math.random(), time: "13:00 - 18:00", },
    ],
    id: Math.random(),
  },
  {
    title: "Wensday",
    workTime: [
      { id: Math.random(), time: "09:00 - 12:00", },
      { id: Math.random(), time: "13:00 - 18:00", },
    ],
    id: Math.random(), 
  },
  {
    title: "Thursday",
    workTime: [
      { id: Math.random(), time: "09:00 - 12:00", },
      { id: Math.random(), time: "13:00 - 18:00", },
    ],
    id: Math.random(),
  },
  {
    title: "Friday",
    workTime: [
      { id: Math.random(), time: "09:00 - 12:00", }
    ],
    id: Math.random(),
  },
];
