import {createAction, props} from '@ngrx/store';
import {LoggedUserResponseModel} from '../core/services/logged-user-service/logged-user-model/logged-user-response.model';

export const loadCores = createAction(
  '[Core] Load Cores'
);

export const loadCoresSuccess = createAction(
  '[Core] Load Cores Success',
  props<{ data: any }>()
);

export const loadCoresFailure = createAction(
  '[Core] Load Cores Failure',
  props<{ error: any }>()
);

export const showMessage = createAction(
  '[Core] Show Message',
  props<{ message: string }>()
);

export const getUsers = createAction(
  '[Core] Get Users',
);

export const getUsersSuccess = createAction(
  '[Core] Get Users Success',
  props<{ payload: LoggedUserResponseModel }>()
);

export const logIn = createAction(
  '[Core] Log In',
  props<{ userId: number}>()
);

export const logInSuccess = createAction(
  '[Core] Log In Success',
  props<{ user: LoggedUserResponseModel }>()
);
