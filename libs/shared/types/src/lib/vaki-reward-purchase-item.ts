import { VakiReward } from './vaki-reward';

export interface VakiRewardPurchaseItem
  extends Omit<VakiReward, 'claimed' | 'quantityAvailable'> {
  quantity: number;
}
