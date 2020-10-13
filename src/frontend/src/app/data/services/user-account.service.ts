import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SignInRequest } from '../models/LoginRequest';
import { SignUpRequest } from '../models/SignUpRequest';
import { UserAccount } from '../models/UserAccount';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserAccountService {
  // tslint:disable-next-line: variable-name
  API_User_Account_URL = environment.AUTH_API_URL;

  httpsOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'Application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  signIn(data: SignInRequest): Observable<string> {
    return this.http
      .post<any>(this.API_User_Account_URL + '/authenticate', data, {
        observe: 'response',
      })
      .pipe(map((response) => response.body.jwttoken));
  }

  signUp(data: SignUpRequest): Observable<UserAccount> {
    const test = this.http
      .post<UserAccount>(this.API_User_Account_URL + '/users', data, {
        observe: 'response',
      })
      .pipe(map((response) => response.body));
    return test;
  }

  SignOut(): Observable<null> {
    return of(null);
  }
}
