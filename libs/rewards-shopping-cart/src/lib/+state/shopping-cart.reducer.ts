import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as ShoppingCartActions from './shopping-cart.actions';
import { VakiRewardCartItem } from '../types/cart-item';

export const SHOPPING_CART_FEATURE_KEY = 'shoppingCart';

export interface State extends EntityState<VakiRewardCartItem> {
  ids: string[];
}

export interface ShoppingCartPartialState {
  readonly [SHOPPING_CART_FEATURE_KEY]: State;
}

export const shoppingCartAdapter: EntityAdapter<VakiRewardCartItem> = createEntityAdapter<VakiRewardCartItem>();

export const initialState: State = shoppingCartAdapter.getInitialState({
  ids: [],
});

const shoppingCartReducer = createReducer(
  initialState,
  on(ShoppingCartActions.load, (state) => {
    console.log(state);
    return state;
  }),
  on(ShoppingCartActions.addReward, (state, { vakiReward }) => {
    const quantity = (state.entities[vakiReward.id]?.quantity ?? 0) + 1;

    console.log(quantity);
    // console.log({ ...vakiReward, quantity });

    return shoppingCartAdapter.upsertOne({ ...vakiReward, quantity }, state);
  }),
  on(
    ShoppingCartActions.setRewardQuantity,
    (state, { vakiRewardId: id, quantity }) => {
      return shoppingCartAdapter.updateOne(
        { id, changes: { quantity } },
        state
      );
    }
  )
);

export function reducer(state: State | undefined, action: Action) {
  return shoppingCartReducer(state, action);
}

export function storageMetaReducer<S, A extends Action = Action>(
  reducer: ActionReducer<S, A>
) {
  let onInit = true;

  return (state: S, action: A): S => {
    const nextState = reducer(state, action);

    if (onInit) {
      onInit = false;
      const savedState = JSON.parse(
        localStorage.getItem(SHOPPING_CART_FEATURE_KEY)
      );

      return savedState ? { ...nextState, ...savedState } : nextState;
    }

    localStorage.setItem(SHOPPING_CART_FEATURE_KEY, JSON.stringify(nextState));

    return nextState;
  };
}
