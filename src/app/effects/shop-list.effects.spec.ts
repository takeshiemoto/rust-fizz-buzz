import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ShopListEffects } from './shop-list.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShopListEffects', () => {
  let actions$: Observable<any>;
  let effects: ShopListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShopListEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get<ShopListEffects>(ShopListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
