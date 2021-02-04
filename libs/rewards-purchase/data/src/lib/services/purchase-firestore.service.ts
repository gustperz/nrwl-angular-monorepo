import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import { from } from 'rxjs';

import { RewardsPurchase, VakiRewardPurchaseItem } from '@vaki/shared/types';

@Injectable({
  providedIn: 'root',
})
export class PurchaseFirestoreService {
  constructor(private db: AngularFirestore) {}

  savePurchase(items: VakiRewardPurchaseItem[], total: number) {
    const purchaseId = this.db.createId();

    const newDoc = this.db.collection('vaki_rewards_purchases').doc(purchaseId);
    newDoc.set({ date_create: Timestamp.now(), value: total });

    const batch = this.db.firestore.batch();

    items.forEach((rewardItem) => {
      const ref = newDoc.collection('rewards').ref.doc(rewardItem.id);
      batch.set(ref, rewardItem);
    });

    const promise = batch.commit();

    return from(promise);
  }
}
