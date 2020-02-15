import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import * as fromTodo from '../reducers/todo.reducer';
import { MemoizedSelector, Store } from '@ngrx/store';
import { Todo } from '../models/todo';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let mockStore: MockStore<fromTodo.State>;
  let mockGetTasksSelector: MemoizedSelector<fromTodo.State, Todo[]>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent],
      imports: [ReactiveFormsModule],
      providers: [provideMockStore()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.get(Store);
    mockGetTasksSelector = mockStore.overrideSelector(fromTodo.getTasks, []);
    fixture.detectChanges();
  });

  it('should create', () => {
    mockGetTasksSelector.setResult([]);
    expect(component).toBeTruthy();
  });
});
