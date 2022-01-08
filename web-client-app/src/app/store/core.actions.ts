import {createAction, props} from '@ngrx/store';
import {LoggedUserResponseModel} from '../core/services/logged-user-service/logged-user-model/logged-user-response.model';
import {UserRegistrationRequestModel} from '../core/services/registration-rest-service/model/user-registration-request.model';
import {ConfirmedUserResponseModel} from '../core/services/confirm-registration-service/model/confirmed-user-response.model';

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
    props<{ userId: number }>()
);

export const logInSuccess = createAction(
    '[Core] Log In Success',
    props<{ user: LoggedUserResponseModel }>()
);

export const userRegistration = createAction(
    '[Core] User Registration',
    props<{ user: UserRegistrationRequestModel }>()
);

export const userRegistrationSuccess = createAction(
    '[Core] User Registration Success',
    props<{ user: UserRegistrationRequestModel }>()
);

export const userFinishRegistrationWithToken = createAction(
    '[Core] User Registration Finished With Token',
    props<{ token: string }>()
);

export const userFinishRegistrationWithTokenSuccess = createAction(
    '[Core] User Registration Finished With Token Success',
    props<{ confirmedUser: ConfirmedUserResponseModel }>()
);

export const userFinishRegistrationWithTokenFailed = createAction(
    '[Core] User Registration Finished With Token Failed',
    props<{ errorMessage: string }>()
);
