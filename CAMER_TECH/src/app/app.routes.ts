import {Routes} from '@angular/router';
import {HomeComponent} from "./feature/home/home.component";
import {SignInComponent} from "./feature/sign-in/sign-in.component";
import {SignUpComponent} from "./feature/sign-up/sign-up.component";
import {DashboardComponent} from "./feature/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: '', component: HomeComponent, title: 'CAMER_TECH'
  },
  {
    path: 'sign-in', component: SignInComponent, title: 'CAMER_TECH SIGN IN '
  },
  {
    path: 'sign-up', component: SignUpComponent, title: 'CAMER_TECH SIGN UP '
  },
  {
    path: 'dashboard', component: DashboardComponent, title: 'CAMER_TECH DASHBOARD',
    loadChildren: () => import('././feature/dashboard/dashboard.route').then(m => m.routes)
  }
];
