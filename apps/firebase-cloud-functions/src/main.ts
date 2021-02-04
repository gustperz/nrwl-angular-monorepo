import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();
const db = admin.firestore();

export const updateRewardQuantityOnPurchase = functions.firestore
  .document('/vaki_rewards_purchases/{purchaseId}/rewards/{rewardId}')
  .onCreate(async (snap, context) => {
    const quantityPurchase = snap.data().quantity;

    const rewardRef = db.doc(`vaki_rewards/${snap.id}`);
    const reward = (await rewardRef.get()).data();

    return rewardRef.set({
      quantityAvailable: reward.quantityAvailable - quantityPurchase,
    });
  });
