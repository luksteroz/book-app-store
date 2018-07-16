import { Injectable } from '@angular/core';
import {HeaderComponent} from './header.component';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private count = 0;
  private behavoirBasket = new BehaviorSubject( this.count );
  counterBasketObservable = this.behavoirBasket.asObservable();
  constructor() { }
  incrementCounter() {
    this.behavoirBasket.next(++this.count);
  }
  decrementCounter () {
    this.behavoirBasket.next(--this.count);
  }
}
