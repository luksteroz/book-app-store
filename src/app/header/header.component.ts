import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  counter: number = 0;

  constructor() {}

  ngOnInit() {
  }
  incrementCounter () {

    this.counter = this.counter + 1;
    console.log('click increment', this.counter);

  }
}
