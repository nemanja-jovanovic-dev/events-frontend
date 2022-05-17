import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../store';
import * as reducer from '../store/core.reducer';
import {mergeMap, take, tap} from 'rxjs/operators';
import {PUBLIC_ROUTE} from '../util/routes';

@Injectable({
    providedIn: 'root'
})
export class PreloadUserDataGuard implements CanActivate {

    isUserLoggedIn$: Observable<boolean> = this.store.select(reducer.isUserLoggedIn);
    isLoggedIn: boolean;
    token$: Observable<string> = this.store.select(reducer.userToken);

    token: string;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('In user login guard!');

        // TODO fetch user properties in this guard

        this.token$
            .pipe(take(1))
            .subscribe(token => this.token = token);

        console.log('Token in guard: ', this.token);

        if (!this.token) {
            this.router.navigate([PUBLIC_ROUTE]);
        }

        return !!this.token;
    }

    constructor(private store: Store<AppState>, private router: Router) {
    }
}
