import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromActions from './core.actions';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {LoggedUserService} from '../services/logged-user-service/logged-user.service';
import {Store} from '@ngrx/store';
import {AppState} from './index';
import {RegistrationRestService} from '../services/registration-rest-service/registration-rest.service';
import {UserRegistrationRequestModel} from '../services/registration-rest-service/model/user-registration-request.model';
import {ConfirmRegistrationRestService} from '../services/confirm-registration-service/confirm-registration-rest.service';
import {ConfirmedUserResponseModel} from '../services/confirm-registration-service/model/confirmed-user-response.model';
import {CredentialsVerificationRestService} from '../services/auth-service/credentials-verification-rest.service';
import {Router} from '@angular/router';
import {SECURED_ROUTE} from '../util/routes';
import {MatDialog} from '@angular/material/dialog';
import { CredentialsVerificationResponseModel } from '../services/auth-service/model/credentials-verification-response.model';

@Injectable()
export class CoreEffects {

    constructor(
        private actions$: Actions,
        private credentialsVerificationRestService: CredentialsVerificationRestService,
        private router: Router,
        private matDialog: MatDialog
    ) {
    }

    finishRegistrationWithToken$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromActions.userFinishRegistrationWithToken),
            exhaustMap(action => {
                return this.credentialsVerificationRestService.confirmUserRegistration(action.token)
                    .pipe(
                        map((confirmedUser: ConfirmedUserResponseModel) => {
                            return fromActions.userFinishRegistrationWithTokenSuccess({confirmedUser});
                        })
                    );
            })
        )
    );

    userLogin$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromActions.userLogin),
            exhaustMap(action => {
                return this.credentialsVerificationRestService.userLogin(action.userCredentials).pipe(
                    map((response) => {
                        this.router.navigate([SECURED_ROUTE]);
                        this.matDialog.closeAll();
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

    createUnconfirmedUser$ = createEffect(() => this.actions$
            .pipe(
                ofType(fromActions.userRegistration),
                exhaustMap(action => {
                    return this.credentialsVerificationRestService.userRegistration(action.user)
                    .pipe(
                        map((response: CredentialsVerificationResponseModel) => {
                            return fromActions.userRegistrationSuccess({user: response})
                        }),
                        catchError((error) => {
                            console.error(error);
                            throw new Error(error);
                        })
                    )
                })
            )
    )
}
