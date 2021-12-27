import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserResponseModel} from './model/user-response.model';
import {UserRegistrationRequestModel} from './model/user-registration-request.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationRestService {

  // apiBaseUrl = 'http://localhost:8080/categories';
  apiBaseUrl = 'http://localhost:8080/unconfirmedUsers';

  constructor(private http: HttpClient) { }

  getUserByUsername(username: string): Observable<UserResponseModel> {
    return this.http.get<UserResponseModel>(this.apiBaseUrl + `/${username}`);
  }

  createUnconfirmedUser(user: UserRegistrationRequestModel): Observable<UserRegistrationRequestModel> {
    return this.http.post<UserRegistrationRequestModel>(this.apiBaseUrl, user);
  }

  // createUserRegistration(user: UserResponseModel): Observable<void> {
  //   return this.http.post<void>(this.apiBaseUrl, user);
  // }

  // userLogIn(username: string, password: string): Observable<any> {
  //   return this.http.get()
  // }

  // getCategories(name: string): Observable<any> {
  //   return this.http.post<any>(this.apiBaseUrl, name);
  // }
}
