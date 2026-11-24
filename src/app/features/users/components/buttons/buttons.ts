import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { usersData } from '../../../../../data';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class Buttons {
  router = inject(Router);
  @Input({ required: true }) user!: IUser;
  @Input() sorted!: IUser[];

  UsersData: IUser[] = usersData;
  delete() {
    const index = this.UsersData.indexOf(this.user);
    this.UsersData.splice(index, 1);

    const usersort = this.sorted.filter((u) => u.id == this.user.id)[0];

    const indexsort = this.sorted.indexOf(usersort);

    if (indexsort != -1) this.sorted.splice(indexsort, 1);
  }
  hide() {
    this.user.show = false;
  }
}
