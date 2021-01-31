import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VakiDetailsCardComponent } from './vaki-details-card/vaki-details-card.component';
import { VakiRewardCardComponent } from './vaki-reward-card/vaki-reward-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VakiDetailsCardComponent, VakiRewardCardComponent],
  exports: [VakiDetailsCardComponent, VakiRewardCardComponent]
})
export class VakisUiModule {
}
