import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface RewardsPurchase {
  date_create: Timestamp;
  value: number;
}
