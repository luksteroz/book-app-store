import { Component, OnInit } from '@angular/core';
import {Basket} from '../model/basket';
import {BasketService} from '../services/basket.service';
import {SharedService} from '../header/shared.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  private basket: Basket;
  constructor(private basketService: BasketService, private shared: SharedService) { }

  ngOnInit() {
    this.setBasket();
  }
  setBasket() {
    this.basket = this.basketService.getBasketItem();
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
  }
}

