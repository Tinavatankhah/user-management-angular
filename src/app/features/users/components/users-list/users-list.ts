import { Component, Input } from '@angular/core';
import { Buttons } from '../buttons/buttons';
// import { usersData } from '../../../../../data';

@Component({
  selector: 'app-users-list',
  imports: [Buttons],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList {
  @Input({ required: true }) sortedUsers!: IUser[];
  // users: IUser[] = usersData;
}
