import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) {}

  registerUser(username, password): Observable<any>  {
    return this.http.post<any>('http://localhost:3000/auth/register', {username, password});
  }

  loginUser(username, password): Observable<any> {
    return this.http.post<any>('http://localhost:3000/auth/login', {username, password});
  }

}
