import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './router/approuter.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { UserService } from './services/user.service';
import { JwtInterceptor } from './helpers/jwtInterceptor';
import { ErrorInterceptor} from './helpers/errorInterceptor';


import { CfsComponent } from './admin/cfs/cfs.component';
import { EcyComponent } from './admin/ecy/ecy.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { EcyDetailComponent } from './admin/ecy/ecy-detail/ecy-detail.component';
//import { LoginNavbarComponent } from './shared/login-navbar/login-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CfsComponent,
    EcyComponent,
    UserManagementComponent,
    AdminHomeComponent,
    EcyDetailComponent,
    //LoginNavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    
    HttpClientModule,
  ],
  providers: [HttpService,UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }