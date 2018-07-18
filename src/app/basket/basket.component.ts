import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Basket} from '../model/basket';
import {BasketService} from '../services/basket.service';
import {SharedService} from '../header/shared.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket: Basket;
  basketAmount: number;
  summaryAmount: number;
  shippingCost: number;
  constructor(private basketService: BasketService, private shared: SharedService) { }
  @Output() productsAmount = new EventEmitter();
  ngOnInit() {
    this.setBasket();
  }
  setBasket() {
    this.basket = this.basketService.getBasketItem();
    this.basketAmount = this.getBasketAmount();
    this.productsAmount.emit(this.basketAmount);
  }
  getBasketAmount(): number {
    let summaryPrice: number = 0;
    this.basket.books.forEach(book => summaryPrice += book.amount
    );
    return summaryPrice;
  }
  removeBasketItem(index) {
    this.basketService.removeBasketItem(index);
    this.setBasket();
    this.shared.decrementCounter();
    this.summaryAmount = this.basketAmount + this.shippingCost;
  }
  updateAmount(value) {
    this.summaryAmount = this.basketAmount + value;
    this.shippingCost = value;
  }
}

