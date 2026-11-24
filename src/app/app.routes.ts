import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { NotFound } from './features/not-found/not-found';
import { authGuard } from './guards/auth-guard';
import { UsersManagement } from './features/users/components/users-management/users-management';
import { Edit } from './features/edit/edit';
import { AddUser } from './features/add-user/add-user';
import { unsavedGuard } from './guards/unsaved-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'users',
    canActivate: [authGuard],
    loadComponent: () => import('./features/users/users').then((c) => c.Users),
    children: [
      {
        path: '',
        component: UsersManagement,
      },
      {
        path: 'edit/:id',
        component: Edit,
        canDeactivate:[unsavedGuard]
      },
      {
        path: 'add',
        component:AddUser
      },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
