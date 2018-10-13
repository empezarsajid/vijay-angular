import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule, MatInputModule, MatButtonModule,
  MatPaginatorModule, MatTableModule, MatSortModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    ReactiveFormsModule,
  ],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule,
    MatPaginatorModule, MatTableModule, MatSortModule, ReactiveFormsModule],
  declarations: []
})
export class SharedModule { }
