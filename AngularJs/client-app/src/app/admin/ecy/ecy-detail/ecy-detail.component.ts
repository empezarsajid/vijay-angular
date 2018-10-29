import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { UserService } from '../../../services/user.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import 'rxjs/Rx';


@Component({
  selector: 'eslab-ecy-detail',
  templateUrl: './ecy-detail.component.html',
  styleUrls: ['./ecy-detail.component.css']
})
export class EcyDetailComponent implements OnInit {

  constructor(private httpService: HttpService, private userService: UserService) { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['Vessel', 'Voyage', 'ContainerNo', 'Size', 'Type',
    'InTime', 'ScreenShot', 'HoldTime', 'ApprovedTime'];
  dataSource = new EcyDetailDataSource(this.userService);
}

export class EcyDetailDataSource extends DataSource<EcyDetailModel> {

  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<EcyDetailModel[]> {
    return this.userService.getUser("http://www.mocky.io/v2/5bd44c233200005a00a3bd93")
      .map(v => v.Data);
  }

  disconnect() { }
}

export interface EcyDetailModel {
  Data: any,
  Message: string,
  Success: boolean
}