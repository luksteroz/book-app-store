import { Injectable } from '@angular/core';
import {HeaderComponent} from './header.component';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private header: HeaderComponent = new HeaderComponent();
  constructor() { }
  incrementCounter() {
    this.header.incrementCounter();
  }
}
