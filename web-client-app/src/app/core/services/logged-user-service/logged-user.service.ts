import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggedUserResponseModel } from './logged-user-model/logged-user-response.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoggedUserService {
    controllerUrl = 'http://localhost:3000/users';

    constructor(private httpClient: HttpClient) {}

    getUsers(): Observable<LoggedUserResponseModel> {
        return this.httpClient.get<LoggedUserResponseModel>(this.controllerUrl);
    }

    getUser(id: number): Observable<LoggedUserResponseModel> {
        return this.httpClient.get<LoggedUserResponseModel>(
            this.controllerUrl + `/${id}`
        );
    }
}
