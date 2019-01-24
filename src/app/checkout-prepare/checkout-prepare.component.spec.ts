import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPrepareComponent } from './checkout-prepare.component';

describe('CheckoutPrepareComponent', () => {
  let component: CheckoutPrepareComponent;
  let fixture: ComponentFixture<CheckoutPrepareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutPrepareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutPrepareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
