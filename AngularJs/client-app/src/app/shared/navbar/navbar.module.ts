import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { LoginNavbarComponent } from '../login-navbar/login-navbar.component';

@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [NavbarComponent,LoginNavbarComponent],
    exports: [NavbarComponent,LoginNavbarComponent]
})

export class NavbarModule { }
