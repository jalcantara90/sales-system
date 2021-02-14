import { fromEvent, Subscription } from 'rxjs';
import { OverlayRef, Overlay, FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ViewContainerRef, TemplateRef, Input, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';

@Directive({
  selector: '[contextMenu]'
})
export class ContextMenuDirective implements AfterViewInit, OnDestroy {
  @Input() contextMenu: TemplateRef<any>;
  overlayRef: OverlayRef;
  sub = new Subscription();
  clickSubscription = new Subscription();

  constructor(
    private overlay: Overlay,
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngAfterViewInit(): void {
    this.clickSubscription = fromEvent(this.elementRef.nativeElement, 'click')
      .subscribe((event: MouseEvent) => this.open(event));
  }

  ngOnDestroy(): void {
    this.clickSubscription.unsubscribe();
  }

  open({ x, y }: MouseEvent) {
    this.close();
    const positionStrategy = this.overlayPosition(x, y);
    this.overlayRef = this.createOverlay(positionStrategy);

    this.sub = this.overlayRef.backdropClick()
    .subscribe(() => this.close());

    this.overlayRef.attach(new TemplatePortal(this.contextMenu, this.viewContainerRef));
  }

  private overlayPosition(x: number, y: number): FlexibleConnectedPositionStrategy {
    return this.overlay.position()
    .flexibleConnectedTo({ x, y })
    .withPositions([
      {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top',
      }
    ]);
  }

  private createOverlay(positionStrategy: FlexibleConnectedPositionStrategy): OverlayRef {
    return this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close(),
      hasBackdrop: true,
      backdropClass: 'no-class'
    });
  }

  close() {
    this.sub && this.sub.unsubscribe();
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

}
