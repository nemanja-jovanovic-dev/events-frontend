import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CredentialsVerificationRequestModel} from './model/credentials-verification-request.model';
import {CredentialsVerificationResponseModel} from './model/credentials-verification-response.model';
import {UserCredentialsRequestModel} from './model/user-credentials-request.model';

@Injectable({
    providedIn: 'root',
})
export class CredentialsVerificationRestService {
    apiBaseUrl = 'http://localhost:8080/auth';

    constructor(private http: HttpClient) {
    }

    userRegistration(credentials: CredentialsVerificationRequestModel): Observable<CredentialsVerificationResponseModel> {
        return this.http.post<CredentialsVerificationResponseModel>(`${this.apiBaseUrl}/register`, credentials);
    }

    confirmUserRegistration(token: string): Observable<CredentialsVerificationResponseModel> {
        return this.http.post<CredentialsVerificationResponseModel>(`${this.apiBaseUrl}/register/confirm`, token);
    }

    userLogin(userCredentials: UserCredentialsRequestModel): Observable<string> {
        return this.http.post<string>(`${this.apiBaseUrl}/login`, userCredentials);
    }
}
