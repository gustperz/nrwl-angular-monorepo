import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartButtonFabComponent } from './cart-button-fab.component';

describe('CartButtonFabComponent', () => {
  let component: CartButtonFabComponent;
  let fixture: ComponentFixture<CartButtonFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartButtonFabComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartButtonFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
