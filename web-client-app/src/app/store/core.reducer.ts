import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import * as CoreAction from './core.actions';
import {LoggedUserResponseModel} from '../core/services/logged-user-service/logged-user-model/logged-user-response.model';
import {UserResponseModel} from '../core/services/registration-rest-service/model/user-response.model';
import {ConfirmedUserResponseModel} from '../core/services/confirm-registration-service/model/confirmed-user-response.model';


export const coreFeatureKey = 'core';

const stateSelector = createFeatureSelector<State>(coreFeatureKey);
export const loggedUsersSelector = createSelector(stateSelector, (state: State) => state.loggedUsers);
export const confirmedUserSelector = createSelector(stateSelector, (state: State) => state.confirmedUserDetails);
export const loadingSelector = createSelector(stateSelector, (state: State) => state.loading);

export interface State {
    loading: boolean;
    message: string;
    loggedUsers: LoggedUserResponseModel[];
    unconfirmedUser: UserResponseModel;
    confirmedUserDetails: ConfirmedUserResponseModel;
}

export const initialState: State = {
    loading: true,
    message: null,
    loggedUsers: [],
    unconfirmedUser: null,
    confirmedUserDetails: null
};

export const reducer = createReducer(
    initialState,
    on(CoreAction.showMessage, (state: State, action: Action) => {
        console.log('Action: ', action);
        return {
            ...state,
            loading: false,
            message: 'This is new message from reducer!'
        };
    }),
    on(CoreAction.getUsersSuccess, (state: State, {payload}) => {
        return {
            ...state,
            loading: false,
            loggedUsers: [payload]
        };
    }),
    on(CoreAction.userRegistrationSuccess, (state: State, {user}) => {
        return {
            ...state,
            loading: false,
            unconfirmedUser: user
        };
    }),
    on(CoreAction.userFinishRegistrationWithTokenSuccess, (state: State, {confirmedUser}) => {
        console.log('Confirmed user in reducer: ', confirmedUser);
        return {
            ...state,
            loading: false,
            confirmedUserDetails: confirmedUser
        };
    }),
);
