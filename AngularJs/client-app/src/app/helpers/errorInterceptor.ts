import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router : Router) {
        this.router = router;
     }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                // clear the localStorage and call the logout method
                this.logout();
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }

    logout() : void{
        localStorage.setItem('currentUser', null);
        this.router.navigate(['login']);
    }
}