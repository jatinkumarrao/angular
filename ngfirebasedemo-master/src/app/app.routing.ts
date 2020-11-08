import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from './users/signup.component';
import { UsersComponent } from './users/users.component';
import { SigninComponent } from './users/signin.component';
import { UserAuthGuardService } from './user-auth-guard.service';
const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/signup', pathMatch: 'full'},
    {path: 'signup', component: SignupComponent},
    {path: 'userProfile', component: UsersComponent ,canActivate:[UserAuthGuardService] },
    {path: 'signin', component: SigninComponent}
    //{path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(APP_ROUTES);