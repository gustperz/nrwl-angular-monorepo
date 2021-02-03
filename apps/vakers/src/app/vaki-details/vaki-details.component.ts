import { Component, OnInit } from '@angular/core';

import { Vaki, VakiReward } from '@vaki/shared/types';
import { VakisStoreService } from '@vaki/vakis/data';

@Component({
  selector: 'vaki-vaki-details',
  templateUrl: './vaki-details.component.html',
  styleUrls: ['./vaki-details.component.scss'],
})
export class VakiDetailsComponent implements OnInit {
  vaki: Vaki;
  rewards: VakiReward[] = [];

  constructor(private service: VakisStoreService) {}

  ngOnInit(): void {
    const vakiId = 'J7jKgeiF5nn5euks01WB';

    this.service.getVaki(vakiId).subscribe((vaki) => (this.vaki = vaki));

    this.service
      .getVakiRewards(vakiId)
      .subscribe((vakiRewards) => (this.rewards = vakiRewards));
  }
}
