import { Component } from '@angular/core';
import { Buttons } from '../buttons/buttons';
// import { usersData } from '../../../../../data';

@Component({
  selector: 'app-users-list',
  imports: [Buttons],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList {
  // users:IUser[]=usersData;
  users: IUser[] = [
    { id: 1, fullName: 'علی رضایی', email: 'ali@company.ir', role: 'مدیر سیستم', status: 'فعال', show: true },
    { id: 3, fullName: 'سارا احمدی', email: 'sara@gamil.com', role: 'کاربر عادی', status: 'فعال', show: true },
    { id: 4, fullName: 'محمد کریمی', email: 'mohammad@gmail.com', role: 'اپراتور', status: 'غیرفعال', show: true },
  ];
}
