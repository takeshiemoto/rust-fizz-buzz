import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';
import { Todo } from '../models/todo';
import { addTask } from '../actions/todo.actions';

export const todoFeatureKey = 'todo';

export interface State {
  tasks: Todo[];
}

export const initialState: State = {
  tasks: [{ name: '買い物', completed: false }]
};

const todoReducer = createReducer(
  initialState,
  on(addTask, (state, { name }) => ({
    ...state,
    tasks: [
      ...state.tasks,
      {
        name,
        completed: false
      }
    ]
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return todoReducer(state, action);
}

const getCounterState = createFeatureSelector<State>('todo');
export const getTasks = createSelector(getCounterState, state => state.tasks);
