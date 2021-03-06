import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SalePointComponent } from './sale-point.component';

describe('SalePointComponent', () => {
  let component: SalePointComponent;
  let fixture: ComponentFixture<SalePointComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SalePointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
