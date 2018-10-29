import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { UserService } from '../../services/user.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'eslab-ecy',
  templateUrl: './ecy.component.html',
  styleUrls: ['./ecy.component.css']
})
export class EcyComponent implements OnInit {

  constructor(private httpService: HttpService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['Vessel', 'Voyage', 'TotalTwenty', 'TotalForty', 'OnHoldTwenty',
    'OnHoldForty', 'PendingTwenty', 'PendingForty', 'CompletedTwenty', 'CompletedForty'];
  dataSource = new EcyDataSource(this.userService);

  showData(row): void {
    this.router.navigate(['admin/ecy', row.Vessel]);
  }
}

export class EcyDataSource extends DataSource<EcyUserModel> {

  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<EcyUserModel[]> {
    return this.userService.getUser("http://www.mocky.io/v2/5bd44a863200006300a3bd8f")
      .map(v => v.Data);
  }

  disconnect() { }
}

export interface EcyUserModel {
  Data: any,
  Message: string,
  Success: boolean
}