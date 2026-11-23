import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { NotFound } from './features/not-found/not-found';
import { Users } from './features/users/users';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'users',
    canActivate: [authGuard],
    loadComponent: () => import('./features/users/users').then((c) => c.Users),
  },
  {
    path: 'users/:id',
    component: Users,
    //update
  },
  {
    path: '**',
    component: NotFound,
  },
];
