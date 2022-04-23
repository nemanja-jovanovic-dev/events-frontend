import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../store';
import * as reducer from '../store/core.reducer';
import {take} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PreloadUserDataGuard implements CanActivate {

    isUserLoggedIn$: Observable<boolean> = this.store.select(reducer.isUserLoggedIn);
    isLoggedIn: boolean;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.isUserLoggedIn$
            .pipe(take(1))
            .subscribe(
                value => this.isLoggedIn = value
            );

        return this.isLoggedIn;
    }

    constructor(private store: Store<AppState>) {
    }
}
