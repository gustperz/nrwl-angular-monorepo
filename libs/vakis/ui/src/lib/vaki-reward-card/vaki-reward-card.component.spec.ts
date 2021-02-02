import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakiRewardCardComponent } from './vaki-reward-card.component';

describe('VakiRewardCardComponent', () => {
  let component: VakiRewardCardComponent;
  let fixture: ComponentFixture<VakiRewardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VakiRewardCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakiRewardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
