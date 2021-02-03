export interface VakiReward {
  id: string;
  title: string;
  description: string;
  visible: boolean;
  img: string;
  key: string;
  value: number;
  delivery_date: number;
  claimed: number;
  quantityAvailable: number;
}
