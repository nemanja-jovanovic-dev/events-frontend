import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CredentialsVerificationRequestModel} from './model/credentials-verification-request.model';
import {CredentialsVerificationResponseModel} from './model/credentials-verification-response.model';
import {UserCredentialsRequestModel} from './model/user-credentials-request.model';
import * as fromReducer from '../../store/core.reducer';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import {take} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class CredentialsVerificationRestService {
    apiBaseUrl = 'http://localhost:8080/auth';

    token$: Observable<string> = this.store.select(fromReducer.userToken);

    constructor(private http: HttpClient, private store: Store<AppState>) {
    }

    userRegistration(credentials: CredentialsVerificationRequestModel): Observable<CredentialsVerificationResponseModel> {
        return this.http.post<CredentialsVerificationResponseModel>(`${this.apiBaseUrl}/register`, credentials);
    }

    confirmUserRegistration(token: string): Observable<CredentialsVerificationResponseModel> {
        return this.http.post<CredentialsVerificationResponseModel>(`${this.apiBaseUrl}/register/confirm`, token);
    }

    userLogin(userCredentials: UserCredentialsRequestModel): Observable<any> {
        // const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

        return this.http.post(`${this.apiBaseUrl}/login`,userCredentials);
    }

    isUserLoggedIn(): boolean {
        let isUserLoggedIn: boolean = false;

        this.token$.pipe(take(1)).subscribe(
            token => isUserLoggedIn = !!token
        );

        return isUserLoggedIn
    }
}
