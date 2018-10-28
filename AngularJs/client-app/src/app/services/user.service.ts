import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
//import 'rxjs/add/operator/map';
import { UserModel } from '../models/UserModel';
@Injectable()
export class UserService {
  //private serviceUrl = 'http://localhost:5000/api/users/getall';
  
  constructor(private http: HttpClient) { }
  
  getUser(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
  
}