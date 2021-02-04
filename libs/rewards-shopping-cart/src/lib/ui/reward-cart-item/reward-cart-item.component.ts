import { Component, EventEmitter, Input, Output } from '@angular/core';

import { VakiRewardPurchaseItem } from '@vaki/shared/types';

@Component({
  selector: 'vaki-reward-cart-item[item]',
  templateUrl: './reward-cart-item.component.html',
  styleUrls: ['./reward-cart-item.component.scss'],
})
export class RewardCartItemComponent {
  @Input() item: VakiRewardPurchaseItem;
  @Output() quantityChanged = new EventEmitter<number>();
  @Output() removeButtonClick = new EventEmitter<VakiRewardPurchaseItem>();

  changeQuantity(n: number) {
    this.quantityChanged.emit(this.item.quantity + n);
  }
}
