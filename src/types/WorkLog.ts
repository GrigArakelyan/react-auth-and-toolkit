export type WorkLogType = {  
      title: string;
      workTime:{
        id: number;
        time: string;
      }[];
      id: number; 
}[]

export type WorkDayType = {
  title: string;
  workTime: {
      id: number;
      time: string;
  }[];
  id: number;
}

export type WorkTimesType = {
  id:number;
  time: string
};



// export type PostWorkTime = {
//   id: number;
//   startTime: undefined | object;
//   endTime: undefined | object;
// }



export type StateWorkLogs = {
  data:WorkLogType;
  loading: boolean;
  error: null | string;
}
export type ActionWorkLogs = {
  payload: {
    id:number;
    startTime?: string | undefined; 
    endTime?:string | undefined;
  }
}