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
  name = '';
  users: any;
  success = { 'isSuccess': false, 'message': '' };
  error = { 'isError': false, 'message': '' }
  displayedColumns: string[] = ['name', 'email', 'phone', 'role', 'status', 'action'];
  dataSource = new UserDataSource(this.userService);
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef,
    private httpService: HttpService, private userService: UserService) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    this.name = user.name;
  }

  logout(): void {
    localStorage.setItem('currentUser', null);
    this.router.navigate(['login']);
  }

  getUsers(): void {
    this.httpService.httpGet('api/users/getall', {}).subscribe(data => {
      this.users = data;
    });
  }

  toggleIsApproved(user): void {
    user.isApproved = !user.isApproved;
    this.httpService.httpPost('api/users/UpdateUser', user).subscribe(data => {
      this.changeDetectorRef.detectChanges();
    });
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<UserModel[]> {
    return this.userService.getUser();
  }
  disconnect() { }
}