import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
    // Get expected role from route configuration
    const expectedRole = route.data.expectedRole;
    if (localStorage.getItem('currentUser') != 'null') {
      // User is logged in, check the user role now
      var user = JSON.parse(localStorage.getItem('currentUser'));
      if (user.roleId == expectedRole) {
        return true;
      }
      return false;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
