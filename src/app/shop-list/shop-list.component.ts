import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getLoading, getShopList, State } from '../reducers/shop-list.reducer';
import { loadShops } from '../actions/shop-list.actions';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  readonly shopList$ = this.store.pipe(select(getShopList));
  readonly loading$ = this.store.pipe(select(getLoading));

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(loadShops());
  }
}
