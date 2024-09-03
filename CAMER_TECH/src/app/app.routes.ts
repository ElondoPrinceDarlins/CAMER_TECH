import {Routes} from '@angular/router';
import {HomeComponent} from "./feature/home/home.component";
import {SignInComponent} from "./feature/sign-in/sign-in.component";
import {SignUpComponent} from "./feature/sign-up/sign-up.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home component'},
  {path: 'signIn', component: SignInComponent, title: 'SignIn'},
  {path: 'signUp', component: SignUpComponent, title: 'SignUp'},
  {
    path: 'dashboard',
    loadChildren: () => import('./feature/dashboard/dashboard.route').then(m => m.routes)
  }
];
