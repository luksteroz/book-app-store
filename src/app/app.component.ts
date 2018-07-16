import {Component, Inject, OnInit} from '@angular/core';
import {GoogleBookService} from './services/google-book.service';
import {Book} from './model/book';
import {Saleability} from './model/saleability.enum';
import {LOCAL_STORAGE, SESSION_STORAGE, StorageService, WebStorageService} from 'angular-webstorage-service';
import {BasketService} from './services/basket.service';
import {SharedService} from './header/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
}
