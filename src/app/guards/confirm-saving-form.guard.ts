import { CanDeactivateFn } from '@angular/router';
import { SignUpComponent } from '../components/sign-up/sign-up.component';

export const confirmSavingFormGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
 if(component instanceof SignUpComponent){
    if(component.signUpObjectForm.dirty){
      return window.confirm("there are some shanges not saved,are you sureyou want to leave")
    }
  }
  //ok ==true== go to components
  return true;};
