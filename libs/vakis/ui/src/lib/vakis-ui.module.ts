import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VakiDetailsCardComponent } from './vaki-details-card/vaki-details-card.component';
import { VakiRewardCardComponent } from './vaki-reward-card/vaki-reward-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ],
  declarations: [VakiDetailsCardComponent, VakiRewardCardComponent],
  exports: [VakiDetailsCardComponent, VakiRewardCardComponent],
})
export class VakisUiModule {}
