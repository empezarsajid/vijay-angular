import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  parent: string;
  hasChild: boolean;
}
export const ROUTES: RouteInfo[] = [
  { path: './home', title: 'Dashboard', icon: 'pe-7s-graph', class: '', parent: '', hasChild: false },
  { path: './ecy', title: 'ECY', icon: 'pe-7s-news-paper', class: '', parent: '', hasChild: true },
  { path: './cfs', title: 'CFS', icon: 'pe-7s-science', class: '', parent: '', hasChild: false },
  { path: './manageusers', title: 'Manage User', icon: 'pe-7s-user', class: '', parent: '', hasChild: false },
];

export const childRoutes: RouteInfo[] = [
  { path: './home', title: 'Dashboard', icon: 'pe-7s-graph', class: '', parent: 'ECY', hasChild: false },
  { path: './ecy', title: 'ECY', icon: 'pe-7s-news-paper', class: '', parent: 'ECY', hasChild: false }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    //   if ($(window).width() > 991) {
    //       return false;
    //   }
    return true;
  };

  getChildRoutes(parent: string): RouteInfo[] {
    return childRoutes.filter(menuItem => menuItem.parent == parent);
  }

}