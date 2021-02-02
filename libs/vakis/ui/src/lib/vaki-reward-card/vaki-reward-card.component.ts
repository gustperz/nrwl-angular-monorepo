import { Component, Input } from '@angular/core';
import { VakiReward } from '@vaki/vakis/types';

@Component({
  selector: 'vaki-vaki-reward-card[reward]',
  templateUrl: './vaki-reward-card.component.html',
  styleUrls: ['./vaki-reward-card.component.scss'],
})
export class VakiRewardCardComponent {
  @Input() reward: VakiReward;
}
