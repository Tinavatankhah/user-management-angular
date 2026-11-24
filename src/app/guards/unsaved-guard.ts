import { CanActivateFn } from '@angular/router';

export const unsavedGuard: CanActivateFn = (route, state) => {
  confirm("ایا میخواهید از صفحه خارج شوید؟")
  return true;
};
