import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const role = route.queryParams['role'];
  if (role == 'admin') {
    return true;
  } else {
    return router.navigate(['/']);
  }
};
