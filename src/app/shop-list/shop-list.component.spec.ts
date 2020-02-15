import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopListComponent } from './shop-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as fromShopList from '../reducers/shop-list.reducer';
import { MemoizedSelector, Store } from '@ngrx/store';
import { Shop } from '../models/shop';

describe('ShopListComponent', () => {
  let component: ShopListComponent;
  let fixture: ComponentFixture<ShopListComponent>;
  let mockStore: MockStore<fromShopList.State>;
  let mockLoadingSelector: MemoizedSelector<fromShopList.State, boolean>;
  let mockShopListSelector: MemoizedSelector<fromShopList.State, Shop[]>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShopListComponent],
      providers: [provideMockStore()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopListComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.get(Store);
    mockLoadingSelector = mockStore.overrideSelector(
      fromShopList.getLoading,
      false
    );
    mockShopListSelector = mockStore.overrideSelector(
      fromShopList.getShopList,
      []
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    mockLoadingSelector.setResult(false);
    mockShopListSelector.setResult([]);
    expect(component).toBeTruthy();
  });
});
