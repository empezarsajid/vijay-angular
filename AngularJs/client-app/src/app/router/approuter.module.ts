import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { AdminHomeComponent } from '../admin/admin-home/admin-home.component';
import { UserManagementComponent } from '../admin/user-management/user-management.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { EcyComponent } from '../admin/ecy/ecy.component';
import { CfsComponent } from '../admin/cfs/cfs.component';
import { SharedModule } from '../shared-module/shared.module';
import { RouteGuard } from '../guards/routeguard.guard';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {
    path: 'admin', component: DashboardComponent, canActivate: [RouteGuard],
    data: {
      expectedRole: '1'
    },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AdminHomeComponent },
      { path: 'manageusers', component: UserManagementComponent },
      { path: 'ecy', component: EcyComponent },
      { path: 'cfs', component: CfsComponent },
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    //AdminLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
    SharedModule,
    //AdminLayoutModule
  ],
  declarations: [RegistrationComponent, LoginComponent, HomeComponent, DashboardComponent]
})

export class AppRouterModule { }