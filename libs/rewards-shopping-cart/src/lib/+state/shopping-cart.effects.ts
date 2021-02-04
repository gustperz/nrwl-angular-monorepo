import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import * as ShoppingCartActions from './shopping-cart.actions';
import { PurchaseFirestoreService } from '@vaki/rewards-purchase/data';

@Injectable()
export class ShoppingCartEffects {
  savePurchase$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActions.savePurchase),
      fetch({
        run: ({ vakiRewards, total }) =>
          this.service.savePurchase(vakiRewards, total).pipe(
            map(() => {
              return ShoppingCartActions.savePurchaseSuccess();
            })
          ),
      })
    )
  );

  constructor(
    private actions$: Actions,
    private service: PurchaseFirestoreService
  ) {}
}
