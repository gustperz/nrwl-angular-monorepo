import { TestBed } from '@angular/core/testing';

import { VakisStoreService } from './vakis-store.service';

describe('VakisStoreService', () => {
  let service: VakisStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VakisStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
