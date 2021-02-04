import { Component, EventEmitter, Input, Output } from '@angular/core';

import { VakiRewardCartItem } from '@vaki/rewards-shopping-cart';

@Component({
  selector: 'vaki-reward-cart-item[item]',
  templateUrl: './reward-cart-item.component.html',
  styleUrls: ['./reward-cart-item.component.scss'],
})
export class RewardCartItemComponent {
  @Input() item: VakiRewardCartItem;
  @Output() quantityChanged = new EventEmitter<number>();
  @Output() removeButtonClick = new EventEmitter<VakiRewardCartItem>();

  changeQuantity(n: number) {
    this.quantityChanged.emit(this.item.quantity + n);
  }
}
