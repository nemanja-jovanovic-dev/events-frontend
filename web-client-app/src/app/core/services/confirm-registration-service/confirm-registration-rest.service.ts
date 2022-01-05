import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmRegistrationRestService {

  apiBaseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {
  }
  createUser(token: any): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl, token);
  }
}
