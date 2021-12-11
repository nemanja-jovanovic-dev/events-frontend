import {Action, createReducer, on} from '@ngrx/store';
import * as CoreAction from './core.actions';


export const coreFeatureKey = 'core';

export interface State {
  message: string;
}

export const initialState: State = {
  message: null
};

export const reducer = createReducer(
  initialState,
  on(CoreAction.showMessage, (state: State, action: Action) => {
    console.log('Action: ', action);
    return {
      ...state,
      message: 'This is new message from reducer!'
    };
  })
);
