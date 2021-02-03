import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';

import {
  getTotal,
  ShoppingCartPartialState,
} from '@vaki/rewards-shopping-cart';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'vaki-cart-button-fab',
  templateUrl: './cart-button-fab.component.html',
  styleUrls: ['./cart-button-fab.component.scss'],
})
export class CartButtonFabComponent implements OnInit {
  @ViewChild('tooltip') tooltip: MatTooltip;

  totalItems: number;
  totalValue: number;

  constructor(private store: Store<ShoppingCartPartialState>) {}

  ngOnInit(): void {
    this.store
      .pipe(select(getTotal))
      .subscribe(({ totalItems, totalValue }) => {
        this.totalItems = totalItems;
        this.totalValue = totalValue;

        this.showTooltip();
      });
  }

  showTooltip() {
    if (!this.tooltip) return;

    this.tooltip.show();
    setTimeout(() => this.tooltip.hide(2000));
  }
}
