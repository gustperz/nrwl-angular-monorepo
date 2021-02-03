import { Country } from './country';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface Vaki {
  description: string;
  start_date: number;
  close_date: Timestamp;
  name: string;
  summary: string;
  url: string;
  photo?: string;
  video?: string;
  country: Country['isoCode'];
}
