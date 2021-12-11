import { createAction, props } from '@ngrx/store';

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
