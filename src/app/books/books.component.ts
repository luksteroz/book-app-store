import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from '../model/book';
import {GoogleBookService} from '../services/google-book.service';
import {BasketService} from '../services/basket.service';
import {SharedService} from '../header/shared.service';
import {Saleability} from '../model/saleability.enum';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title = 'app';
  books: Array<Book> = new Array();
  saleability = Saleability;
  constructor(
    private bookService: GoogleBookService,
    private basketService: BasketService,
    private shared: SharedService) {}
  @Output() amountCounter = new EventEmitter<any>();

  ngOnInit(): void {
    this.searchByTitle('Harry Potter');
    console.log(this.books);
  }
  // getAuthors() {
  //   this.authorService.getAuthor()
  //     .subscribe(authors => this.author = authors);
  // }
  // getPictures() {
  //   console.log('getPictures');
  //   this.authorService.getPictures()
  //     .subscribe(pictures => this.pictures = pictures);
  // }
  searchByTitle(title: string): void {
    this.bookService.searchByTitle(title)
      .subscribe(bookService => this.mapBook(bookService));
  }
  mapBook(bookService: any) {

    bookService.items.forEach(book => {
      console.log(book);

      let amount, currencyCode, buyLink;
      if (book.saleInfo.saleability === Saleability.FOR_SALE) {
        amount = book.saleInfo.listPrice.amount;
        currencyCode = book.saleInfo.listPrice.currencyCode;
        buyLink = book.saleInfo.buyLink;
      }
      this.books.push(new Book(
        book.id,
        book.volumeInfo.title,
        book.volumeInfo.authors,
        book.volumeInfo.description,
        book.volumeInfo.averageRating,
        book.volumeInfo.imageLinks.smallThumbnail,
        book.saleInfo.saleability,
        book.saleInfo.isEbook,
        amount,
        currencyCode,
        buyLink
      ));
    });
  }
  addItemToBasket (book): void {
    this.basketService.addItem(book);
    this.shared.incrementCounter();
  }

}
