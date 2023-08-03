import { WorkLogType } from "./WorkLog";

export type Store = {
  loginEmail: {
      data: {};
      loading: boolean;
      error: null;
  };
  loginCode: {
      data: {};
      status: null;
      loading: boolean;
      error: null;
  };
  myProfile: {
      data: {};
      status: null;
      loading: boolean;
      error: null;
  };
  workLogs:{
      data: WorkLogType;
      status: null;
      loading: boolean;
      error: null;
  };
}
export type State = {
   data: object;
   loading: boolean;
   error: null | string  
 }

export type FetchType = {
   pending: any;
   fulfilled: any;
   rejected: any;
 }

