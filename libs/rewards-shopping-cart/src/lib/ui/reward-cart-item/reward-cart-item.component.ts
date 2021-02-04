import { Component, Input } from '@angular/core';
import { VakiRewardCartItem } from '@vaki/rewards-shopping-cart';

@Component({
  selector: 'vaki-reward-cart-item[item]',
  templateUrl: './reward-cart-item.component.html',
  styleUrls: ['./reward-cart-item.component.scss'],
})
export class RewardCartItemComponent {
  @Input() item: VakiRewardCartItem;
}
