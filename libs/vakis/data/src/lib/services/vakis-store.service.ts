import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Vaki, VakiReward } from '@vaki/shared/types';

@Injectable({
  providedIn: 'root',
})
export class VakisStoreService {
  constructor(private firestore: AngularFirestore) {}

  getVaki(id: string) {
    return this.firestore.collection<Vaki>('vakis').doc(id).valueChanges();
  }

  getVakiRewards(id: string) {
    return this.firestore
      .collection<VakiReward>('vaki_rewards', (ref) =>
        ref.where('key', '==', id)
      )
      .valueChanges();
  }
}
