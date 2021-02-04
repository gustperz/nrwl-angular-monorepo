import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import {
  getTotal,
  getShoppingCart,
  ShoppingCartPartialState,
  setRewardQuantity,
  removeRewardFromCart,
  savePurchase,
} from '@vaki/rewards-shopping-cart';
import { VakiRewardPurchaseItem } from '@vaki/shared/types';
import { Router } from '@angular/router';

@Component({
  selector: 'vaki-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  totalValue: number;
  items: VakiRewardPurchaseItem[] = [];

  constructor(
    private store: Store<ShoppingCartPartialState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.pipe(select(getTotal)).subscribe(({ totalValue }) => {
      this.totalValue = totalValue;
    });

    this.store.pipe(select(getShoppingCart)).subscribe((items) => {
      this.items = items;
    });
  }

  updateItemQuantity(vakiRewardId: string, quantity: number) {
    if (quantity === 0) {
      return this.store.dispatch(removeRewardFromCart({ vakiRewardId }));
    }

    this.store.dispatch(setRewardQuantity({ vakiRewardId, quantity }));
  }

  removeItem(item: VakiRewardPurchaseItem) {
    this.store.dispatch(removeRewardFromCart({ vakiRewardId: item.id }));
  }

  sendPurchase() {
    this.store.dispatch(
      savePurchase({ vakiRewards: this.items, total: this.totalValue })
    );
  }

  back() {
    this.router.navigate(['/']);
  }
}
