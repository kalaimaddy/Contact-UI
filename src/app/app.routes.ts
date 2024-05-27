import { Routes } from '@angular/router';
import { appConfig } from './app.config';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admins/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './users/user-dashboard/user-dashboard.component';

export const routes: Routes = [

  { path: '', pathMatch: 'full', component:AppComponent},
  // redirectTo: 'login'
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'user', component: UserDashboardComponent},

];
