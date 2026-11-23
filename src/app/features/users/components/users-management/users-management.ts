import { Component } from '@angular/core';
import { UsersList } from '../users-list/users-list';


@Component({
  selector: 'app-users-management',
  imports: [UsersList],
  templateUrl: './users-management.html',
  styleUrl: './users-management.css',
})
export class UsersManagement {}
