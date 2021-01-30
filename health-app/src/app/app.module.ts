import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HealthProfileScreenComponent } from './health-profile-screen/health-profile-screen.component';
import { ClinicDashboardComponent } from './clinic-dashboard/clinic-dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HealthProfileScreenComponent,
    ClinicDashboardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserModule, FormsModule , ReactiveFormsModule,AppRouting,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
