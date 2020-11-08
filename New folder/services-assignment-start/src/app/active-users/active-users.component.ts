import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users:string[];
  //@Input() users: string[];
  //@Output() userSetToInactive = new EventEmitter<number>();
constructor(private user:UserService){}
ngOnInit(): void {
this.users=this.user.activeUsers;
}

  onSetToInactive(id: number) {
    this.user.onSetToInactive(id);
    //this.userSetToInactive.emit(id);
  }
}
