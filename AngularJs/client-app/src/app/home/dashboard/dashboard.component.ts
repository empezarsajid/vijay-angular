import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { UserService } from '../../services/user.service';
import { Router } from "@angular/router";
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/UserModel';

@Component({
  selector: 'eslab-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
}