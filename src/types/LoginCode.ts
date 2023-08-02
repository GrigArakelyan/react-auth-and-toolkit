export type LoginCodePostData = {
   email: string;
   languageID:string;
   code: string;
}

export interface LoginCodeInputsChange {
   code1?: string;
   code2?: string;
   code3?: string;
   code4?: string;
   code5?: string;
   code6?: string;
}
export type ActionLoginCode = {
   payload: string ;
 }



