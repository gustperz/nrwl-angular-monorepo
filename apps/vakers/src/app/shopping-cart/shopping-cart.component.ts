import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import {
  getTotal,
  getShoppingCart,
  ShoppingCartPartialState,
  VakiRewardCartItem,
  setRewardQuantity,
  removeRewardFromCart,
} from '@vaki/rewards-shopping-cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'vaki-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  totalValue: number;
  items$: Observable<VakiRewardCartItem[]>;

  constructor(private store: Store<ShoppingCartPartialState>) {}

  ngOnInit(): void {
    this.store.pipe(select(getTotal)).subscribe(({ totalValue }) => {
      this.totalValue = totalValue;
    });

    this.items$ = this.store.pipe(select(getShoppingCart));
  }

  updateItemQuantity(vakiRewardId: string, quantity: number) {
    if (quantity === 0) {
      return this.store.dispatch(removeRewardFromCart({ vakiRewardId }));
    }

    this.store.dispatch(setRewardQuantity({ vakiRewardId, quantity }));
  }

  removeItem(item: VakiRewardCartItem) {
    this.store.dispatch(removeRewardFromCart({ vakiRewardId: item.id }));
  }
}
