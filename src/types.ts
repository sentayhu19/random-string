/**
 * 
 */
export type options={
   charset?:"alphanumeric"|"number"|"alphabet"|"hex"|"binary"|"octal",
   disableCapitalLetters?:boolean, //disable capital letter
   char?:string, // 13rea
   length: number,
   disableSmallLetters?:boolean, 
   insertSymbol?:boolean,   
}

export const hex="0123456789ABCDEFabcdef"
export const symbols='[-!$%^&*()_+|~=`{}\[\]:";<>?,.\/]'+"'"
export const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
export const alphanumeric='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'