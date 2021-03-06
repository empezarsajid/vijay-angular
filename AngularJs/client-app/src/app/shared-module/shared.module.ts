import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule, MatInputModule, MatButtonModule,
  MatPaginatorModule, MatTableModule, MatSortModule, MatTabsModule,
  MatDividerModule, MatSelectModule, MatDatepickerModule,MatNativeDateModule,
  MatCardModule,MatAutocompleteModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { FooterModule } from '../shared/footer/footer.module';
import { SidebarModule } from '../sidebar/sidebar.module';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MatDividerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatAutocompleteModule
  ],
  exports: [
    ReactiveFormsModule, NavbarModule, FooterModule, SidebarModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatPaginatorModule,
    MatTableModule, MatSortModule, MatTabsModule, MatDividerModule,
    MatSelectModule, MatDatepickerModule,MatNativeDateModule,MatCardModule,
    MatAutocompleteModule
  ],
  declarations: []
})
export class SharedModule { }