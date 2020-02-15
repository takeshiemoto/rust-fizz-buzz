import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCounter from './counter.reducer';
import * as fromTodo from './todo.reducer';
import * as fromShopList from './shop-list.reducer';

export interface State {
  [fromCounter.counterFeatureKey]: fromCounter.CounterState;
  [fromTodo.todoFeatureKey]: fromTodo.State;
  [fromShopList.shopListFeatureKey]: fromShopList.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromCounter.counterFeatureKey]: fromCounter.reducer,
  [fromTodo.todoFeatureKey]: fromTodo.reducer,
  [fromShopList.shopListFeatureKey]: fromShopList.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
