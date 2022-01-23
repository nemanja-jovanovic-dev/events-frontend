import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CredentialsVerificationRequestModel} from './model/credentials-verification-request.model';

@Injectable({
    providedIn: 'root'
})
export class CredentialsVerificationRestService {

    apiBaseUrl = 'http://localhost:8080/auth';

    constructor(private http: HttpClient) {
    }

    userLogin(credentials: CredentialsVerificationRequestModel): Observable<any> {
        return this.http.post<any>(`${this.apiBaseUrl}/login`, credentials);
    }
}
