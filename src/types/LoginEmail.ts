export interface LoginEmailPostData  {
   email: string;
   languageID?: string;
}

export type DataLoginEmail = {
   data: object;
   loading: boolean;
   error: string | undefined,
}

export interface IFormData {
   email:string;
}
