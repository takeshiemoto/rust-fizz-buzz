import { createAction, props } from '@ngrx/store';

export const addTask = createAction(
  '[Todo Component] AddTodo',
  props<{ name: Partial<string> }>()
);
