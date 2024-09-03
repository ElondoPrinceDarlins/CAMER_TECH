import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashboardStatisticsComponent} from "./dashboard/dashboard-statistics/dashboard-statistics.component";

export const routes: Routes = [
  {
    path: '', component: DashboardComponent, title: 'Dashboard',
    children: [
      {path: 'stats', component: DashboardStatisticsComponent, title: 'Statistics'}
    ]
  },
];
