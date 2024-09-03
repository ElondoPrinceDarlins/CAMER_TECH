import {Routes} from '@angular/router';
import {HomeComponent} from "./feature/home/home.component";
import {SignInComponent} from "./feature/sign-in/sign-in.component";
import {SignUpComponent} from "./feature/sign-up/sign-up.component";
import {TechnicianComponent} from "./feature/technician/technician.component";
import {ContactComponent} from "./feature/contact/contact.component";
import {GreenComputingComponent} from "./feature/green-computing/green-computing.component";
import {AboutComponent} from "./feature/about/about.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home component'},
  {path: 'signIn', component: SignInComponent, title: 'SignIn'},
  {path: 'signUp', component: SignUpComponent, title: 'SignUp'},
  {path: 'technician', component: TechnicianComponent, title: 'Technician'},
  {path: 'contact', component: ContactComponent, title: 'Contact'},
  {path: 'greenComputing', component: GreenComputingComponent, title: 'greenComputing'},
  {path: 'about', component: AboutComponent, title: 'greenComputing'},
  {
    path: 'dashboard',
    loadChildren: () => import('./feature/dashboard/dashboard.route').then(m => m.routes)
  }
];
