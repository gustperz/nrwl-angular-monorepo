import { Component, Input } from '@angular/core';

import { Vaki } from '@vaki/vakis/types';

@Component({
  selector: 'vaki-vaki-details-card[vaki]',
  templateUrl: './vaki-details-card.component.html',
  styleUrls: ['./vaki-details-card.component.scss'],
})
export class VakiDetailsCardComponent {
  @Input() vaki: Vaki;
}
