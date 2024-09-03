import {Routes} from '@angular/router';
import {HomeComponent} from "./features/home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home component'},
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.routes)
  }
];
