import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';
import { Shop } from '../models/shop';
import {
  loadShops,
  loadShopsFailure,
  loadShopsSuccess
} from '../actions/shop-list.actions';

export const shopListFeatureKey = 'shopList';

export interface State {
  loading: boolean;
  shops: Shop[];
}

export const initialState: State = {
  loading: false,
  shops: []
};

const shopListReducer = createReducer(
  initialState,
  on(loadShops, state => ({ ...state, loading: true, shops: [] })),
  on(loadShopsSuccess, (state, action) => ({
    ...state,
    loading: false,
    shops: action.shops
  })),
  on(loadShopsFailure, state => ({ ...state, loading: false, shops: [] }))
);

export function reducer(state: State | undefined, action: Action) {
  return shopListReducer(state, action);
}

const getShopListState = createFeatureSelector<State>('shopList');
export const getShopList = createSelector(
  getShopListState,
  state => state.shops
);
export const getLoading = createSelector(
  getShopListState,
  state => state.loading
);
