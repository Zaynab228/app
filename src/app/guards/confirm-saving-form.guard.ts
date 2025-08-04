import { CanDeactivateFn } from '@angular/router';

export const confirmSavingFormGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
