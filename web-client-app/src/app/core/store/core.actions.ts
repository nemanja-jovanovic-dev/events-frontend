import {createAction, props} from '@ngrx/store';
import {LoggedUserResponseModel} from '../services/logged-user-service/logged-user-model/logged-user-response.model';
import {UserRegistrationRequestModel} from '../services/registration-rest-service/model/user-registration-request.model';
import {ConfirmedUserResponseModel} from '../services/confirm-registration-service/model/confirmed-user-response.model';
import {UserCredentialsRequestModel} from '../services/auth-service/model/user-credentials-request.model';

export const showMessage = createAction(
    '[Core] Show Message',
    props<{ message: string }>()
);

export const getUsersSuccess = createAction(
    '[Core] Get Users Success',
    props<{ payload: LoggedUserResponseModel }>()
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

export const userLogin = createAction(
    '[Core] User login',
    props<{ userCredentials: UserCredentialsRequestModel }>()
);

export const userLoginSuccess = createAction(
    '[Core] User login success',
    props<{ token: string }>()
);

export const userLoginFailed = createAction(
    '[Core] User login failed',
    props<{ message: string }>()
);
