import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromActions from './core.actions';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {LoggedUserService} from '../services/logged-user-service/logged-user.service';
import {LoggedUserResponseModel} from '../services/logged-user-service/logged-user-model/logged-user-response.model';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from './index';
import {RegistrationRestService} from '../services/registration-rest-service/registration-rest.service';
import {UserRegistrationRequestModel} from '../services/registration-rest-service/model/user-registration-request.model';
import {ConfirmRegistrationRestService} from '../services/confirm-registration-service/confirm-registration-rest.service';
import {ConfirmedUserResponseModel} from '../services/confirm-registration-service/model/confirmed-user-response.model';
import {CredentialsVerificationRestService} from '../services/auth-service/credentials-verification-rest.service';

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
        private credentialsVerificationRestService: CredentialsVerificationRestService
    ) {
    }
}
