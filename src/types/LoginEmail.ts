export interface LoginEmailPostData  {
   email: string;
   languageID?: string;
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

export type ActionLoginEmailFulfiled = {
   payload: object;
}

export type ActionLoginEmailRejected = {
   payload: null | string;
}