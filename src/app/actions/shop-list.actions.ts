import { createAction, props } from '@ngrx/store';
import { Shop } from '../models/shop';

export const loadShops = createAction('[ShopList] Load shopList');

export const loadShopsSuccess = createAction(
  '[Shop Api] Load shopList success',
  props<{ shops: Shop[] }>()
);

export const loadShopsFailure = createAction(
  '[Shop Api] Load shopList failure'
);
