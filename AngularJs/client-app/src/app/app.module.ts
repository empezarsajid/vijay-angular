import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './router/approuter.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpService } from './services/http.service';
import {
  MatFormFieldModule, MatInputModule, MatButtonModule,
  MatPaginatorModule, MatTableModule, MatSortModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    AppRouterModule ,
    HttpClientModule,
     MatPaginatorModule, MatTableModule, 
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
