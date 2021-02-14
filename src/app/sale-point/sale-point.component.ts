import { FormControl, FormGroup } from '@angular/forms';
import { TicketService } from './../shared/ticket/ticket.service';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Product } from '../shared/product/product.model';
import { productList } from './../shared/product/product-list';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subscription, Observable } from 'rxjs';
import { map, throttleTime, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-sale-point',
  templateUrl: './sale-point.component.html',
  styleUrls: ['./sale-point.component.scss']
})
export class SalePointComponent implements OnInit {
  public productList: Product[] = productList;

  filters = new FormControl([]);
  searchAndOrder = new FormControl({ search: '', order: null });

  filtersAndOrder = new FormGroup({
    filters: new FormControl([]),
    searchAndOrder: new FormControl({ search: '', order: null })
  });

  filter$;
  order$: Observable<string>;
  sub: Subscription = new Subscription();

  constructor(
    private ticketService: TicketService,
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {


    this.filter$ = this.filtersAndOrder.valueChanges.pipe(
      startWith({
        filters: [],
        order: null,
        search: ''
      }),
      throttleTime(300),
      map((filtersAndOrder) => {
        return {
          filters: filtersAndOrder.filters,
          ...filtersAndOrder.searchAndOrder
        }
      })
    );
  }

  addProductTicket(product: Product): void {
    this.ticketService.addProductTicket(product);
  }

  @ViewChild('ticketMenu') ticketMenu: TemplateRef<any>;

  overlayRef: OverlayRef;

  open({ x, y }: MouseEvent) {
    this.close();
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo({ x, y })
      .withPositions([
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        }
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close(),
      hasBackdrop: true,
      backdropClass: 'no-class'
    });

    this.sub = this.overlayRef.backdropClick()
    .subscribe(() => this.close());

    this.overlayRef.attach(new TemplatePortal(this.ticketMenu, this.viewContainerRef));
  }

  close() {
    this.sub && this.sub.unsubscribe();
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
}
