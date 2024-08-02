import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { Observable } from 'rxjs';
import { ApiEndPoint } from '../../config/apiEndPoint';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpService) {}


  public addUser(data: any): Observable<any> {
    return this.http.post(ApiEndPoint.addUser, data);
  }
  public getAllUsers(data: any): Observable<any> {
    return this.http.get(ApiEndPoint.getAllUsers, data);
  }

}
