import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromActions from './core.actions';
import {exhaustMap, map} from 'rxjs/operators';
import {LoggedUserService} from '../core/services/logged-user-service/logged-user.service';
import {LoggedUserResponseModel} from '../core/services/logged-user-service/logged-user-model/logged-user-response.model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from './index';
import {loggedUsersSelector} from './core.reducer';
import {RegistrationRestService} from '../core/services/registration-rest-service/registration-rest.service';
import {UserRegistrationRequestModel} from '../core/services/registration-rest-service/model/user-registration-request.model';


@Injectable()
export class CoreEffects {

  listOfUsers$: Observable<LoggedUserResponseModel[]> = this.store.select(loggedUsersSelector);

  // getUsers$ = createEffect(() => this.actions$
  //   .pipe(
  //     ofType(fromActions.getUsers),
  //     exhaustMap(_ => {
  //       return this.loggedUserService.getUsers()
  //         .pipe(
  //           map((users: LoggedUserResponseModel) => {
  //             return fromActions.getUsersSuccess({payload: users});
  //           })
  //         );
  //     })
  //   )
  // );

  // logIn$ = createEffect(() => this.actions$
  //   .pipe(
  //     ofType(fromActions.logIn),
  //     exhaustMap(action => {
  //       return this.loggedUserService.getUser(action.userId)
  //         .pipe(
  //           map((user: LoggedUserResponseModel) => {
  //             return fromActions.logInSuccess({user});
  //           })
  //         );
  //     })
  //   )
  // );

  registerUnconfirmedUser$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromActions.userRegistration),
      exhaustMap(action => {
        console.log('User to register: ', action.user);
        return this.registrationRestService.createUnconfirmedUser(action.user)
          .pipe(
            map((unconfirmedUser: UserRegistrationRequestModel) => {
              return fromActions.userRegistrationSuccess({user: unconfirmedUser});
            })
          );
      })
    )
  );

  constructor(private actions$: Actions,
              private loggedUserService: LoggedUserService,
              private store: Store<AppState>,
              private registrationRestService: RegistrationRestService) {}
}
