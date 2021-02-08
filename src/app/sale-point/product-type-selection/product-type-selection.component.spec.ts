import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductTypeSelectionComponent } from './product-type-selection.component';

describe('ProductTypeSelectionComponent', () => {
  let component: ProductTypeSelectionComponent;
  let fixture: ComponentFixture<ProductTypeSelectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTypeSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
