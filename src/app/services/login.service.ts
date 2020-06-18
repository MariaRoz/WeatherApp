import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) {}

  registerUser(login, password): Observable<string>  {
   return this.http.post<string>('http://localhost:3000/auth/register', {login, password});
  }

  loginUser(login, password): Observable<string> {
    return this.http.post<string>('http://localhost:3000/auth/login', {login, password});
  }

}
