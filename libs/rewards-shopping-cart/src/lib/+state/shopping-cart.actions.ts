import { createAction, props } from '@ngrx/store';

import { VakiReward, VakiRewardPurchaseItem } from '@vaki/shared/types';

export const load = createAction('[ShoppingCart] Load');

export const addReward = createAction(
  '[ShoppingCart] Add Reward',
  props<{ vakiReward: VakiReward }>()
);

export const removeRewardFromCart = createAction(
  '[ShoppingCart] Remove RewardItem from cart',
  props<{ vakiRewardId: string }>()
);

export const setRewardQuantity = createAction(
  '[ShoppingCart] Change Reward item quantity',
  props<{ vakiRewardId: string; quantity: number }>()
);

export const savePurchase = createAction(
  '[ShoppingCart] Process Rewards purchase',
  props<{ vakiRewards: VakiRewardPurchaseItem[]; total: number }>()
);

export const savePurchaseSuccess = createAction(
  '[ShoppingCart] Process Rewards purchase Success'
);

export const clearCart = createAction(
  '[ShoppingCart] clear Rewards item in cart'
);
