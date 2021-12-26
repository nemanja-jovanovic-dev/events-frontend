import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import * as CoreAction from './core.actions';
import {LoggedUserResponseModel} from '../core/services/logged-user-service/logged-user-model/logged-user-response.model';


export const coreFeatureKey = 'core';

const stateSelector = createFeatureSelector<State>(coreFeatureKey);
export const loggedUsersSelector = createSelector(stateSelector, (state: State) => state.loggedUsers);

export interface State {
  message: string;
  loggedUsers: LoggedUserResponseModel[];
}

export const initialState: State = {
  message: null,
  loggedUsers: []
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
  })
);
