import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardCartItemComponent } from './reward-cart-item.component';

describe('RewardCartItemComponent', () => {
  let component: RewardCartItemComponent;
  let fixture: ComponentFixture<RewardCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardCartItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
