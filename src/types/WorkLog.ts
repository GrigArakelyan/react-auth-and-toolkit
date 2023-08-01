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
