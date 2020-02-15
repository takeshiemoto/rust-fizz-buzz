import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import {
  loadShops,
  loadShopsFailure,
  loadShopsSuccess
} from '../actions/shop-list.actions';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { Shop } from '../models/shop';

@Injectable()
export class ShopListEffects {
  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  shopList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadShops),
      switchMap(() =>
        this.httpClient.get<Shop[]>('./assets/data/shops.json').pipe(
          delay(700),
          map(
            shops => loadShopsSuccess({ shops }),
            catchError(_ => loadShopsFailure)
          )
        )
      )
    )
  );
}
