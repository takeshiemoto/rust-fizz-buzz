import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CounterState, getCount } from '../reducers/counter.reducer';
import { MemoizedSelector, Store } from '@ngrx/store';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let mockStore: MockStore<CounterState>;
  let mockGetCountSelector: MemoizedSelector<CounterState, number>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
      providers: provideMockStore()
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    mockStore = TestBed.get(Store);
    mockGetCountSelector = mockStore.overrideSelector(getCount, 1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    mockGetCountSelector.setResult(1);
    expect(component).toBeTruthy();
  });
});
