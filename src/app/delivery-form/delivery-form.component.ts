import {Component, OnInit, Input, Output, EventEmitter, SimpleChange, SimpleChanges, OnChanges} from '@angular/core';
import {ShippingMethodEnum} from '../model/shipping-method.enum';
import {PaymentMethodEnum} from '../model/payment-method.enum';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit, OnChanges {
  shippingCost:  number = ShippingMethodEnum.KURIER;
  paymentCost: number = PaymentMethodEnum.PRZELEW;
  constructor() { }
  @Input() productsAmount: number;
  @Output() summaryAmount = new EventEmitter();
  amount: number;
  isdeliveryAdressCheck: boolean = false;
  isInvoice: boolean = false;
  ngOnChanges(changes:  SimpleChanges) {
    const amountChanges: SimpleChange = changes['productsAmount'];
    if (amountChanges) {
      this.productsAmount = changes['productsAmount'].currentValue;
      this.setAmount();
    }
  }
  ngOnInit() {
    this.setAmount();
  }
  getShippingCost(value) {
    this.shippingCost = parseFloat(ShippingMethodEnum[value]);
    this.setAmount();
  }
  setAmount() {
    this.amount =  this.productsAmount + this.shippingCost + this.paymentCost;
    this.summaryAmount.emit(this.shippingCost + this.paymentCost);
  }
  checkboxChange($event) {
    if ($event.target.name === 'deliveryAdressCheck'){
      this.isdeliveryAdressCheck = $event.target.checked;
    }
    else {
      this.isInvoice = $event.target.checked;
    }
  }
  changePaymentCost(value) {
    console.log(value, PaymentMethodEnum[value])
    this.paymentCost = parseFloat(PaymentMethodEnum[value]);
    this.setAmount();
  }
}
