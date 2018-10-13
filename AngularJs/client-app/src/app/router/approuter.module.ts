import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../home/dashboard/dashboard.component';
import { SharedModule } from '../shared-module/shared.module';
import { RouteGuard } from '../guards/routeguard.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [RouteGuard]  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [RegistrationComponent, LoginComponent, HomeComponent]
})

export class AppRouterModule { }