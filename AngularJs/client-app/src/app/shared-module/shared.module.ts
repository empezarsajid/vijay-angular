import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule, MatInputModule, MatButtonModule,
  MatPaginatorModule, MatTableModule, MatSortModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from '../helpers/jwtInterceptor';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [
    ReactiveFormsModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatPaginatorModule, MatTableModule, MatSortModule
  ],
  declarations: []
})
export class SharedModule { }
