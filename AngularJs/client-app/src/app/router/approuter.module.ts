import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { AdminHomeComponent } from '../admin/admin-home/admin-home.component';
import { UserManagementComponent } from '../admin/user-management/user-management.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';

// ECY Components
import { EcyComponent } from '../admin/ecy/ecy.component';
import { EcyDashboardComponent } from '../admin/ecy/dashboard/dashboard.component';
import { EcyStartComponent } from '../admin/ecy/start/start.component';
import { EcyTroubleshootComponent } from '../admin/ecy/troubleshoot/troubleshoot.component';

// CFS Components
import { CfsComponent } from '../admin/cfs/cfs.component';
import { CfsDashboardComponent } from '../admin/cfs/dashboard/dashboard.component';
import { CfsStartComponent } from '../admin/cfs/start/start.component';
import { CfsTroubleshootComponent } from '../admin/cfs/troubleshoot/troubleshoot.component';

// Enblock Registration
import { EnblockRegistrationComponent } from '../admin/registration/registration.component';

import { SharedModule } from '../shared-module/shared.module';
import { RouteGuard } from '../guards/routeguard.guard';
import { EcyDetailComponent } from '../admin/ecy/ecy-detail/ecy-detail.component';
import { AddUserComponent } from '../admin/add-user/add-user.component';
//import { FullscreenOverlayContainer } from '@angular/cdk/overlay';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
      { path: 'adduser', component: AddUserComponent },
      { path: 'manageusers', component: UserManagementComponent },

      { path: 'ecy/dashboard', component: EcyDashboardComponent },
      { path: 'ecy/dashboard/:id', component: EcyDetailComponent, pathMatch: 'full' },
      { path: 'ecy/start', component: EcyStartComponent },
      { path: 'ecy/troubleshoot', component: EcyTroubleshootComponent },

      { path: 'cfs/dashboard', component: CfsDashboardComponent },
      { path: 'cfs/start', component: CfsStartComponent },
      { path: 'cfs/troubleshoot', component: CfsTroubleshootComponent },

      { path: 'registration', component: EnblockRegistrationComponent }
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
    SharedModule
  ],
  declarations: [
    EcyComponent, EcyDashboardComponent, EcyStartComponent, EcyTroubleshootComponent,
    CfsComponent, CfsDashboardComponent, CfsStartComponent, CfsTroubleshootComponent,
    EcyDetailComponent, EnblockRegistrationComponent,AddUserComponent,
    UserManagementComponent, AdminHomeComponent,
    RegistrationComponent, LoginComponent, HomeComponent, DashboardComponent
  ]
})

export class AppRouterModule { }