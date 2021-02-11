import { Product } from './../../shared/product/product.model';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { Ticket } from '../../shared/ticket/ticket.model';

import { TicketComponent } from './ticket.component';

fdescribe('TicketComponent', () => {
  const product1 = new Product('product1');
  const product2 = new Product('product2');
  const product3 = new Product('product3');

  let spectator: Spectator<TicketComponent>;
  const createComponent = createComponentFactory({
    component: TicketComponent,
    imports: [
      NoopAnimationsModule
    ],
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should show the empty message', () => {
    const noItemsMessage = spectator.query('p');
    expect(noItemsMessage).toBeTruthy();
    expect(noItemsMessage.textContent).toBe('Your order is empty, start choosing some food');
  });

  it('should print one pos__item__ticket for each different product', () => {
    const ticket = new Ticket('Test Booking', 4, 21);
    ticket.addItem(product1);
    ticket.addItem(product1);
    ticket.addItem(product2);
    ticket.addItem(product3);
    spectator = createComponent({
      props: { ticket }
    });

    const ticketItem = spectator.queryAll('.pos__item__ticket');
    expect(ticketItem).toHaveLength(3);

    const item1 = ticketItem[0].querySelector('.quantity');
    const item2 = ticketItem[1].querySelector('.quantity');
    const item3 = ticketItem[2].querySelector('.quantity');
    expect(item1.textContent).toBe('x 2');
    expect(item2.textContent).toBe('x 1');
    expect(item3.textContent).toBe('x 1');
  });

});
