import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromCore from './core.reducer';


export interface AppState {

  [fromCore.coreFeatureKey]: fromCore.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromCore.coreFeatureKey]: fromCore.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
