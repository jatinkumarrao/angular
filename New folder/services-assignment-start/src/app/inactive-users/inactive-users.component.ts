import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  //@Input() users: string[];
 // @Output() userSetToActive = new EventEmitter<number>();
constructor(private user:UserService){}
users:string[];
ngOnInit():void{
this.users=this.user.inactiveUsers
}
  onSetToActive(id: number) {
    this.user.onSetToActive(id);
   // this.userSetToActive.emit(id);
  }
}
