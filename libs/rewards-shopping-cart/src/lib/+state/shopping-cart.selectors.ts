import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  SHOPPING_CART_FEATURE_KEY,
  shoppingCartAdapter,
  ShoppingCartPartialState,
  State,
} from './shopping-cart.reducer';

// Lookup the 'ShoppingCart' feature state managed by NgRx
export const getShoppingCartState = createFeatureSelector<
  ShoppingCartPartialState,
  State
>(SHOPPING_CART_FEATURE_KEY);

const { selectAll, selectEntities } = shoppingCartAdapter.getSelectors();

export const getShoppingCart = createSelector(
  getShoppingCartState,
  (state: State) => selectAll(state)
);

export const getTotal = createSelector(getShoppingCartState, (state: State) =>
  Object.values(selectEntities(state)).reduce(
    (totals, item) => {
      totals.totalValue += item.quantity * item.value;
      totals.totalItems++;

      return totals;
    },
    { totalValue: 0, totalItems: 0 }
  )
);
