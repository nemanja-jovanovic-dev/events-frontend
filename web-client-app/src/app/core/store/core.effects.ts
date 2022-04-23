import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromActions from './core.actions';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {LoggedUserService} from '../services/logged-user-service/logged-user.service';
import {Store} from '@ngrx/store';
import {AppState} from './index';
import {CredentialsVerificationRestService} from '../services/auth-service/credentials-verification-rest.service';
import {Router} from '@angular/router';
import {SECURED_ROUTE} from '../util/routes';

@Injectable()
export class CoreEffects {

    // finishRegistrationWithToken$ = createEffect(() => this.actions$
    //     .pipe(
    //         ofType(fromActions.userFinishRegistrationWithToken),
    //         exhaustMap(action => {
    //             return this.confirmRegistrationRestService.createUser(action.token)
    //                 .pipe(
    //                     map((confirmedUser: ConfirmedUserResponseModel) => {
    //                         return fromActions.userFinishRegistrationWithTokenSuccess({confirmedUser});
    //                     }),
    //                     catchError((confirmedUserError) => {
    //                         console.error('Server status: ', confirmedUserError.status);
    //                         this.store.dispatch(fromActions.userFinishRegistrationWithTokenFailed({
    //                             errorMessage: confirmedUserError.error
    //                         }));
    //                         return of(null);
    //                     })
    //                 );
    //         })
    //     )
    // );

    userLogin$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromActions.userLogin),
            exhaustMap(action => {
                return this.credentialsVerificationRestService.userLogin(action.userCredentials).pipe(
                    map((response) => {
                        this.router.navigate([SECURED_ROUTE]);
                        return fromActions.userLoginSuccess({token: response});
                    }),
                    catchError((error) => {
                        console.error('User login error: ', error);
                        throw fromActions.userLoginFailed({message: error});
                    })
                );
            })
        )
    );

    constructor(
        private actions$: Actions,
        private loggedUserService: LoggedUserService,
        private store: Store<AppState>,
        private credentialsVerificationRestService: CredentialsVerificationRestService,
        private router: Router
    ) {
    }
}
