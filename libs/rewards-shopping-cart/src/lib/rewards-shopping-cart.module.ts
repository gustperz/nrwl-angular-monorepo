import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromShoppingCart from './+state/shopping-cart.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromShoppingCart.SHOPPING_CART_FEATURE_KEY,
      fromShoppingCart.reducer,
      { metaReducers: [fromShoppingCart.storageMetaReducer] }
    ),
  ],
})
export class RewardsShoppingCartModule {}
