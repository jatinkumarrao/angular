import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '../app/signup/signup.component';
import { UserComponent } from '../app/user/user.component';
import { SigninComponent } from '../app/signin/signin.component';
import { UserAuthGuardService } from '../app/services/user-auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/signup', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'userProfile', component: UserComponent ,canActivate:[UserAuthGuardService] },
  {path: 'signin', component: SigninComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
