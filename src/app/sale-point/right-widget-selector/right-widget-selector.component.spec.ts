import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightWidgetSelectorComponent } from './right-widget-selector.component';

describe('RightWidgetSelectorComponent', () => {
  let component: RightWidgetSelectorComponent;
  let fixture: ComponentFixture<RightWidgetSelectorComponent>;

  beforeEach(async(() => {
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
