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
import * as fromShopList from './shop-list.reducer';

export interface State {
  counter: CounterState;
  [fromTodo.todoFeatureKey]: fromTodo.State;
  [fromShopList.shopListFeatureKey]: fromShopList.State;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  [fromTodo.todoFeatureKey]: fromTodo.reducer,
  [fromShopList.shopListFeatureKey]: fromShopList.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
