import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromActions from './core.actions';
import {exhaustMap, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {LoggedUserService} from '../core/services/logged-user-service/logged-user.service';
import {LoggedUserResponseModel} from '../core/services/logged-user-service/logged-user-model/logged-user-response.model';
import {LoginUserModel} from '../core/components/login/model/login-user.model';
import {forkJoin, Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from './index';
import {loggedUsersSelector} from './core.reducer';


@Injectable()
export class CoreEffects {

  listOfUsers$: Observable<LoggedUserResponseModel[]> = this.store.select(loggedUsersSelector);

  getUsers$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromActions.getUsers),
      exhaustMap(_ => {
        return this.loggedUserService.getUsers()
          .pipe(
            map((users: LoggedUserResponseModel) => {
              return fromActions.getUsersSuccess({payload: users});
            })
          );
      })
    )
  );

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

  constructor(private actions$: Actions, private loggedUserService: LoggedUserService, private store: Store<AppState>) {}
}
