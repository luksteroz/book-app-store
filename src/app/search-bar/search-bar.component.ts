import {Component, OnInit, ViewChild} from '@angular/core';
import {BooksComponent} from '../books/books.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  title: string;
  constructor() { }
  @ViewChild(BooksComponent) child: BooksComponent;
  ngOnInit() {
  }
  searchTitle() {
    console.log(this.title);
    this.child.searchByTitle(this.title);
  }
}
