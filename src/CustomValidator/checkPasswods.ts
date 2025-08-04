import { AbstractControl, ValidationErrors} from "@angular/forms";

export function checkRepassword(formGroup:AbstractControl):null|ValidationErrors
{
 let password=formGroup.value.password;
  let Repassword=formGroup.value.rePassword;
  if(password==Repassword){
    return null;
  }
  else return {passWordMismatch:true}
}