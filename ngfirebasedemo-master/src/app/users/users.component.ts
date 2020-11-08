import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _data:UserAuthService) { }

  ngOnInit() {
  var x=  this._data.userProfile();
  alert(x.email);
  }

}
