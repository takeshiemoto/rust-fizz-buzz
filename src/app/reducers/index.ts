import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { counterReducer, CounterState } from './counter.reducer';
import * as fromTodo from './todo.reducer';

export interface State {
  counter: CounterState;
  [fromTodo.todoFeatureKey]: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  [fromTodo.todoFeatureKey]: fromTodo.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
