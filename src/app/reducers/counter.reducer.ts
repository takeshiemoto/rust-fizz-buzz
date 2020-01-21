import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';
import { increment, decrement, reset } from '../actions/contier.action';

export interface CounterState {
  count: number;
}

/**
 * Store
 */
export const initialState: CounterState = {
  count: 0
};

/**
 * Reducer
 */
const _counterReducer = createReducer(
  initialState,
  on(increment, state => ({ ...state, count: state.count + 1 })),
  on(decrement, state => ({ ...state, count: state.count - 1 })),
  on(reset, state => ({ ...state, count: 0 }))
);

export function counterReducer(
  state: CounterState | undefined,
  action: Action
) {
  return _counterReducer(state, action);
}

/**
 * Selector
 */
const getCounterState = createFeatureSelector<CounterState>('counter');
export const getCount = createSelector(getCounterState, state => state.count);
