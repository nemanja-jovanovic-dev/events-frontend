import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import * as CoreAction from './core.actions';
import {LoggedUserResponseModel} from '../core/services/logged-user-service/logged-user-model/logged-user-response.model';
import {UserResponseModel} from '../core/services/registration-rest-service/model/user-response.model';
import {ConfirmedUserResponseModel} from '../core/services/confirm-registration-service/model/confirmed-user-response.model';


export const coreFeatureKey = 'core';

const stateSelector = createFeatureSelector<State>(coreFeatureKey);
export const loggedUsersSelector = createSelector(stateSelector, (state: State) => state.loggedUsers);
export const confirmedUserSelector = createSelector(stateSelector, (state: State) => state.confirmedUser);

export interface State {
    message: string;
    loggedUsers: LoggedUserResponseModel[];
    unconfirmedUser: UserResponseModel;
    confirmedUser: ConfirmedUserResponseModel;
}

export const initialState: State = {
    message: null,
    loggedUsers: [],
    unconfirmedUser: null,
    confirmedUser: null
};

export const reducer = createReducer(
    initialState,
    on(CoreAction.showMessage, (state: State, action: Action) => {
        console.log('Action: ', action);
        return {
            ...state,
            message: 'This is new message from reducer!'
        };
    }),
    on(CoreAction.getUsersSuccess, (state: State, {payload}) => {
        return {
            ...state,
            loggedUsers: [payload]
        };
    }),
    on(CoreAction.userRegistrationSuccess, (state: State, {user}) => {
        return {
            ...state,
            unconfirmedUser: user
        };
    }),
    on(CoreAction.userFinishRegistrationWithTokenSuccess, (state: State, {confirmedUser}) => {
        return {
            ...state,
            confirmedUser
        };
    }),
);
