import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { State } from '../reducers';
import { getTasks } from '../reducers/todo.reducer';
import { addTask } from '../actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  readonly tasks$ = this.store.pipe(select(getTasks));

  model: FormGroup;

  constructor(private store: Store<State>, private fb: FormBuilder) {
    this.model = this.fb.group({ task: [''] });
  }

  ngOnInit() {}

  addTask() {
    const { task } = this.model.value;
    this.store.dispatch(addTask({ name: task }));
    this.model.reset();
  }
}
