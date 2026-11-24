import { Component, inject } from '@angular/core';
import { UsersList } from '../users-list/users-list';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { usersData } from '../../../../../data';

@Component({
  selector: 'app-users-management',
  imports: [UsersList, FormsModule],
  templateUrl: './users-management.html',
  styleUrl: './users-management.css',
})
export class UsersManagement {
  router = inject(Router);
  search: string = '';
  data: IUser[] = usersData;
  sort: string = '';
  SortData: IUser[] = usersData;
  change() {
    this.SortData =
      this.sort == ''
        ? this.data.filter((u) => u.email.includes(this.search) || u.fullName.includes(this.search))
        : this.data.filter(
            (u) =>
              (u.email.includes(this.search) || u.fullName.includes(this.search)) &&
              u.role == this.sort,
          );
  }
  showHidden() {
    this.SortData.map((u) => (u.show = true));
  }
}
