import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RightWidgetSelectorComponent } from './right-widget-selector.component';

describe('RightWidgetSelectorComponent', () => {
  let component: RightWidgetSelectorComponent;
  let fixture: ComponentFixture<RightWidgetSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RightWidgetSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightWidgetSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
