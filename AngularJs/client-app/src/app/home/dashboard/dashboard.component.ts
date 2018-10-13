import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from "@angular/router";
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

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
  //displayedColumns: string[] = ['name', 'email', 'phone'];
  //dataSource :  MatTableDataSource<Users>;

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef, private httpService: HttpService) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    this.name = user.name;
    this.getUsers();
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
      this.users = data;
    });
  }

}
