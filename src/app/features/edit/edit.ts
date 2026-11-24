import { Component, inject, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserForm } from '../../shared/components/user-form/user-form';
import { usersData } from '../../../data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [UserForm, FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
  activateRoute = inject(ActivatedRoute);
  router = inject(Router);
  newUsersData: IUser[] = usersData;
  id = this.activateRoute.snapshot.paramMap.get('id');
  user: IUser = this.newUsersData.filter((u) => u.id == Number(this.id))[0];

  update() {
    console.log('main', usersData);
    this.router.navigate(['/users'], { queryParams: { role: 'admin' } });
  }
}
