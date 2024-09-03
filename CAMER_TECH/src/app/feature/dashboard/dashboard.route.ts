import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {SettingsComponent} from "../settings/settings.component";
import {ManagementComponent} from "./management/management.component";
import {TechniciansComponent} from "./technicians/technicians.component";
import {HelpComponent} from "./help/help.component";


export const routes: Routes = [
  {
    path: '', component: DashboardComponent, title: 'CAMER_TECH DASHBOARD',
    children: [
      {
        path: '', component: StatisticsComponent, title: 'home'
      },
      {
        path: 'settings', component: SettingsComponent, title: 'settings'
      },
      {
        path: 'management', component: ManagementComponent, title: 'settings'
      },
      {
        path: 'technicians', component: TechniciansComponent, title: 'technicians'
      },
      {
        path: 'help', component: HelpComponent, title: 'Help'
      }
    ]
  }

];

