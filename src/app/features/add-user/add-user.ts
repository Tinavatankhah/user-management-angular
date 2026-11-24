import { Component, inject } from '@angular/core';
import { UserForm } from '../../shared/components/user-form/user-form';
import { usersData } from '../../../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [UserForm],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
  router = inject(Router);
  UsersData: IUser[] = usersData;
  newUser: IUser = { id: 0, fullName: '', email: '', role: '', status: '', show: true };
  getNewUser(newUser: IUser) {
    this.newUser = newUser;
  }
  add() {
    console.log(usersData);
    this.UsersData.push(this.newUser);
    this.router.navigate(['/users'], { queryParams: { role: 'admin' } });
  }
}
