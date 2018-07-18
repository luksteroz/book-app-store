import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchBarComponent} from './search-bar.component';
import {BooksModule} from '../books/books.module';

@NgModule({
  imports: [
    CommonModule,
    BooksModule
  ],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent]
})
export class SearchModule { }
