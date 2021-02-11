import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTabComponent } from './ticket-tab.component';

describe('TicketTabComponent', () => {
  let component: TicketTabComponent;
  let fixture: ComponentFixture<TicketTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
