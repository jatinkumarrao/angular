import { Component, OnInit } from '@angular/core';
import{UserAuthService} from '../services/user-auth.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  x:any = [];
  constructor(private _data:UserAuthService) { }

  ngOnInit(): void {
    this.x=  this._data.userProfile();
    
  }

}
