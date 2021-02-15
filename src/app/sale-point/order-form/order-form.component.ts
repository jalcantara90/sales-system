import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  orderForm: FormGroup;

  constructor(public ref: DialogRef) { }

  ngOnInit(): void {
    const date = this.ref?.data?.bookingDate ? new Date(this.ref?.data?.bookingDate) : new Date();
    this.orderForm = new FormGroup({
      bookingName: new FormControl(this.ref?.data?.bookingName || '', Validators.required),
      people: new FormControl(this.ref?.data?.people || 2, [Validators.required, Validators.min(1)]),
      table: new FormControl(this.ref?.data?.table || null, [Validators.required, Validators.min(1)]),
      bookingDate: new FormControl(
        date.toISOString().slice(0, -5),
        Validators.required
      )
    }, { updateOn: 'blur' });
  }

  get bookingControl() {
    return this.orderForm.get('bookingName') as FormControl;
  }

  get peopleControl() {
    return this.orderForm.get('people') as FormControl;
  }

  get tableControl() {
    return this.orderForm.get('table') as FormControl;
  }

  get bookingDateControl() {
    return this.orderForm.get('bookingDate') as FormControl;
  }

  close(event: MouseEvent) {
    event.preventDefault();
    this.ref.close();
  }

  save() {
    if (this.orderForm.valid) {
      this.ref.close(this.orderForm.value);
    }
  }

}
