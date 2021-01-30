/**
 * Created by ashwini on 5/4/19.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HealthProfileScreenComponent } from './health-profile-screen/health-profile-screen.component';
import { ClinicDashboardComponent } from './clinic-dashboard/clinic-dashboard.component';
const routes: Routes = [
  // {
  //   path: '', redirectTo: 'navigate', pathMatch: 'full'
  // }, 
  // {
  //   path: 'navigate', component: NavigationComponent
  // },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'healthcare', component: HealthProfileScreenComponent
  },
  {
    path: 'clinical-dashboard', component: ClinicDashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
