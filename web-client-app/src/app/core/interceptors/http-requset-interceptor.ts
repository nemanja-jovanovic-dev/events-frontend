import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../store';
import {Store} from '@ngrx/store';
import { take } from 'rxjs/operators';
import * as fromReducer from '../store/core.reducer';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    token$: Observable<string> = this.store.select(fromReducer.userToken);

    constructor(private store: Store<AppState>){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.addAuthToken(req));
    }

    addAuthToken(request: HttpRequest<any>): HttpRequest<any> {
        let newToken: string = '';
        this.token$.pipe(take(1)).subscribe((token: string) => (newToken = token));

        const clonedRequest = request.clone({
            setHeaders: {
                'Autorization': `Bearer ${newToken}`,
            }
        })

        return clonedRequest;

    }
}
