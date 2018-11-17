import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
declare var $: any;
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request).map(event => {
            // Intercept the response and show the notification accordingly.
            if (event instanceof HttpResponse) {
                // Check body.Message with undefined to verify the property
                // exists in returned response.
                if (event.body.Message != undefined && event.body.Message != '') {
                    if (event.body.Success == true) {
                        this.showNotification("top", "center", "success", event.body.Message);
                    }
                    else {
                        this.showNotification("bottom", "center", "danger", event.body.Message);
                    }
                }
            }
            return event;
        });
    }

    showNotification(from, align, type, message) {

        //color = 'primary';
        $.notify({
            icon: "pe-7s-bell",
            message: message
        }, {
                type: type,
                timer: 1000,
                placement: {
                    from: from,
                    align: align
                }
            });
    }

}