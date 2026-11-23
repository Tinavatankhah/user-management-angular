import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UsersManagement } from './components/users-management/users-management';


@Component({
  selector: 'app-users',
  imports: [RouterOutlet,UsersManagement,RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {

}
