import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  @Output() newUserData = new EventEmitter();

  @Input() user: IUser= { id: 0, fullName: '', email: '', role: '', status: '', show: true }

  change() {
    this.newUserData.emit({
      id:Date.now(),
      fullName: this.user.fullName,
      email: this.user.email,
      role: this.user.role,
      status:'فعال',
      show:true
    });
  }
}
