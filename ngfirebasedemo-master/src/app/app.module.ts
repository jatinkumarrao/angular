import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { UserAuthService } from './user-auth.service';
import { UserAuthGuardService } from './user-auth-guard.service';
import { UsersComponent } from './users/users.component';
import { SignupComponent } from './users/signup.component';
import { HeaderComponent } from './header.component';
import { SigninComponent } from './users/signin.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SignupComponent,
    HeaderComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,  
     ReactiveFormsModule, 
    HttpModule,
    routing
   
  ],
  providers: [UserAuthService,UserAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
