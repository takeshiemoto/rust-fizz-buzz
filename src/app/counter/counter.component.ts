import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../reducers';
import { decrement, increment, reset } from '../actions/contier.action';
import { getCount } from '../reducers/counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  readonly count$ = this.store.pipe(select(getCount));

  constructor(private store: Store<State>) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
