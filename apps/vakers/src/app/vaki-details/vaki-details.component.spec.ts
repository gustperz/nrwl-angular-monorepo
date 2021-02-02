import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakiDetailsComponent } from './vaki-details.component';

describe('VakiDetailsComponent', () => {
  let component: VakiDetailsComponent;
  let fixture: ComponentFixture<VakiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VakiDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
