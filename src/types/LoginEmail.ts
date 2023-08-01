import { CreateSliceOptions, Slice } from "@reduxjs/toolkit";

export interface LoginEmailPostData  {
   email: string;
   languageID?:string;
}

export type DataLoginEmail = {
   data: object;
   loading: boolean;
   error: null | object,
}
export interface IFormData {
   email:string;
 }

export type ReducersData = {
   data: {};
   loading: boolean;
   error: null | object,
}


// export type LoginEmailReducer {
//    data: {};
//    loading: boolean;
//    error: null;
// }, {}, "loginEmail">(Option: CreateSliceOptions<{
//    data: {};
//    loading: boolean;
//    error: null;
// }, {}, "loginEmail">): Slice<{
//    data: {};
//    loading: boolean;
//    error: null;
// }, {}, "loginEmail">