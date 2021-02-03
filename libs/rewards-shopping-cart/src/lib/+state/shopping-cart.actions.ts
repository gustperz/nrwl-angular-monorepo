import { createAction, props } from '@ngrx/store';

import { VakiReward } from '@vaki/shared/types';

export const load = createAction('[ShoppingCart] Load');

export const addReward = createAction(
  '[ShoppingCart] Add Reward',
  props<{ vakiReward: VakiReward }>()
);

export const setRewardQuantity = createAction(
  '[ShoppingCart] Change Reward item quantity',
  props<{ vakiRewardId: string; quantity: number }>()
);
