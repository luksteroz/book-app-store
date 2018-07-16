import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SharedService} from './shared.service';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  counter: number = 0;
  constructor(private shared: SharedService) {}
  ngOnInit() {
    this.shared.counterBasketObservable.subscribe(data => this.counter = data);
  }
}
