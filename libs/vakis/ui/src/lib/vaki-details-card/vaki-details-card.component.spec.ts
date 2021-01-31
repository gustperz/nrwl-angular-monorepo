import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakiDetailsCardComponent } from './vaki-details-card.component';

describe('VakiDetailsCardComponent', () => {
  let component: VakiDetailsCardComponent;
  let fixture: ComponentFixture<VakiDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakiDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakiDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
