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

  getAllUsers(): Observable<any> {
    return this.http.get(ApiEndPoint.getAllUsers);
  }

  getAllUsersWithLimit(offset: any): Observable<any> {
    const query = `limit=10&offset=${offset}`;
    return this.http.get(ApiEndPoint.getAllUsersWithLimit + query);
  }

  updateCompany(data: any): Observable<any> {
    return this.http.put(ApiEndPoint.updateUsers, data);
  }
}
