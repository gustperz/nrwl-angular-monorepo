import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface VakiReward {
  id: string;
  title: string;
  description: string;
  visible: boolean;
  img: string;
  key: string;
  value: number;
  delivery_date: Timestamp;
  claimed: number;
  quantityAvailable: number;
}
