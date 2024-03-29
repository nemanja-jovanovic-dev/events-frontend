import {
    Action,
    createFeatureSelector,
    createReducer,
    createSelector,
    on,
} from '@ngrx/store';
import { CredentialsVerificationResponseModel } from '../services/auth-service/model/credentials-verification-response.model';
import * as CoreAction from './core.actions';

export const coreFeatureKey = 'core';

const stateSelector = createFeatureSelector<State>(coreFeatureKey);

export const loggedUserSelector = createSelector(stateSelector, (state: State) => state.loggedUserInfo);
export const loggedUserTokenSelector = createSelector(stateSelector, (state: State) => state.token);
export const isUserLoggedIn = createSelector(stateSelector, (state: State) => !!state.token);
export const userToken = createSelector(stateSelector, (state: State) => state.token);

export interface State {
    loggedUserInfo: CredentialsVerificationResponseModel;
    token: string;
}

export const initialState: State = {
    loggedUserInfo: null,
    token: '',
};

export const reducer = createReducer(
        initialState,
        on(CoreAction.showMessage, (state: State, action: Action) => {
            console.log('Action: ', action);
            return {
                ...state,
                loading: false,
                message: 'This is new message from reducer!',
            };
        }),
        on(CoreAction.getUsersSuccess, (state: State, {payload}) => {
            return {
                ...state,
                loading: false,
                loggedUsers: [payload],
            };
        }),
        on(CoreAction.userRegistrationSuccess, (state: State, {user}) => {
            return {
                ...state,
                loading: false,
                unconfirmedUser: user,
            };
        }),
        on(
            CoreAction.userFinishRegistrationWithTokenSuccess,
            (state: State, {confirmedUser}) => {
                return {
                    ...state,
                    loading: false,
                    confirmedUserDetails: confirmedUser,
                };
            }
        ),
        on(
            CoreAction.userFinishRegistrationWithTokenFailed,
            (state: State, {errorMessage}) => {
                return {
                    ...state,
                    loading: false,
                    error: errorMessage,
                };
            }
        ),
        on(CoreAction.userLoginSuccess, (state: State, action) => {
            return {
                ...state,
                token: action.loggedUser.token,
                loggedUserInfo: action.loggedUser.loggedUser
            };
        })
    )
;
