import {Inject, Injectable} from '@angular/core';
import {Book} from '../model/book';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {Basket} from '../model/basket';
import index from '@angular/cli/lib/cli';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basket: Basket = new Basket();
  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) { }
  addItem(book: Book): void {
    this.basket.books.push(book);
    this.storage.set('koszyk', this.basket);
  }
  getBasketItem(): Basket {
    return this.storage.get('koszyk');
  }
  removeBasketItem(item: number) {
    this.basket.books.splice(item, 1);
    this.storage.set('koszyk', this.basket);
  }
}
