import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './user-auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userauthService:UserAuthService) { }
isAuth() {
        return this.userauthService.isAuthenticated();
    }
  ngOnInit() {
  }
onLogout() {
  alert("LogOut Called");
        this.userauthService.logout();
    }
}
