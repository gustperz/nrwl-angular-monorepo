import { TestBed } from '@angular/core/testing';

import { PurchaseFirestoreService } from './purchase-firestore.service';

describe('PurchaseFirestoreService', () => {
  let service: PurchaseFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
