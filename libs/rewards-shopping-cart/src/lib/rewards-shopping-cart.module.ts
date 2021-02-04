import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromShoppingCart from './+state/shopping-cart.reducer';
import { CartButtonFabComponent } from './ui/cart-button-fab/cart-button-fab.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RewardCartItemComponent } from './ui/reward-cart-item/reward-cart-item.component';
import { ShoppingCartEffects } from './+state/shopping-cart.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromShoppingCart.SHOPPING_CART_FEATURE_KEY,
      fromShoppingCart.reducer,
      { metaReducers: [fromShoppingCart.storageMetaReducer] }
    ),
    EffectsModule.forFeature([ShoppingCartEffects]),
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
  ],
  declarations: [CartButtonFabComponent, RewardCartItemComponent],
  exports: [CartButtonFabComponent, RewardCartItemComponent],
})
export class RewardsShoppingCartModule {}
