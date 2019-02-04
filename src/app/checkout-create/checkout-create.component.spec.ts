import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCreateComponent } from './checkout-create.component';

describe('CheckoutCreateComponent', () => {
  let component: CheckoutCreateComponent;
  let fixture: ComponentFixture<CheckoutCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
