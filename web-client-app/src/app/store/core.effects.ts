import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromActions from './core.actions';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {LoggedUserService} from '../core/services/logged-user-service/logged-user.service';
import {LoggedUserResponseModel} from '../core/services/logged-user-service/logged-user-model/logged-user-response.model';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from './index';
import {loggedUsersSelector} from './core.reducer';
import {RegistrationRestService} from '../core/services/registration-rest-service/registration-rest.service';
import {UserRegistrationRequestModel} from '../core/services/registration-rest-service/model/user-registration-request.model';
import {ConfirmRegistrationRestService} from '../core/services/confirm-registration-service/confirm-registration-rest.service';
import {ConfirmedUserResponseModel} from '../core/services/confirm-registration-service/model/confirmed-user-response.model';


@Injectable()
export class CoreEffects {

    listOfUsers$: Observable<LoggedUserResponseModel[]> = this.store.select(loggedUsersSelector);

    registerUnconfirmedUser$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromActions.userRegistration),
            exhaustMap(action => {
                return this.registrationRestService.createUnconfirmedUser(action.user)
                    .pipe(
                        map((unconfirmedUser: UserRegistrationRequestModel) => {
                            return fromActions.userRegistrationSuccess({user: unconfirmedUser});
                        })
                    );
            })
        )
    );

    finishRegistrationWithToken$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromActions.userFinishRegistrationWithToken),
            exhaustMap(action => {
                return this.confirmRegistrationRestService.createUser(action.token)
                    .pipe(
                        map((confirmedUser: ConfirmedUserResponseModel) => {
                            return fromActions.userFinishRegistrationWithTokenSuccess({confirmedUser});
                        }),
                        catchError((confirmedUserError) => {
                            console.error('Server status: ', confirmedUserError.status);
                            this.store.dispatch(fromActions.userFinishRegistrationWithTokenFailed({
                                errorMessage: confirmedUserError.error
                            }));
                            return of(null);
                        })
                    );
            })
        )
    );

    constructor(private actions$: Actions,
                private loggedUserService: LoggedUserService,
                private store: Store<AppState>,
                private registrationRestService: RegistrationRestService,
                private confirmRegistrationRestService: ConfirmRegistrationRestService) {
    }
}
