import { Component, OnInit } from '@angular/core';
//import {RegistrationComponent} from '../../registration/registration.component';

@Component({
  selector: 'eslab-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  dashboardItems: string[];
  constructor() { }

  ngOnInit() {
    this.dashboardItems = ['Lorem','Ipsum','Kejaku','Oralu','Adule','Ulo','Alpha','Wertigo','Amaka'];
  }

}
