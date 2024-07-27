import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  post(url: any, data: any): any {
    return this.http.post(environment.apiUrl + url, data);
  }
  
}
