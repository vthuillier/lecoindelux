import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from './user.service';

export const userGuard: CanActivateFn = (route, state) => {
  const token = !!localStorage.getItem('token');
  const router: Router = inject(Router);
  const userService: UserService = inject(UserService);
  console.log('Token:', token);
  console.log('User service:', userService.isAuthenticated(localStorage.getItem('token')!));
  if (!token || !userService.isAuthenticated(localStorage.getItem('token')!)) {
    router.navigate(['/admin/login']).then(r => r);
    return false;
  }
  return token;
};
