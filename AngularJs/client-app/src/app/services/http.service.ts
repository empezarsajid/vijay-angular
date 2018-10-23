import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  domain: string = 'http://localhost:5000/';

  constructor(private http: HttpClient) {
  }

  httpGet(method: string, data: any): Observable<Object> {
    return this.http.get(this.domain + method, data);
  }

  httpGetPromise(method: string, data: any) {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.domain + method, data)
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
          }
        );
    });
    return promise;
  }

  httpPost(method: string, data: any): Observable<Object> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post(this.domain + method, data, config);
  }

  httpPostPromise(method: string, data: any) {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.domain + method, data, config)
        .toPromise()
        .then(
          res => { // Success
           //console.log(res);
           resolve(res);
          }
        );
    });
    return promise;
  }

}