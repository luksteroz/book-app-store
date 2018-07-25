import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchBarComponent} from './search-bar.component';
import {BooksModule} from '../books/books.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BooksModule,
    FormsModule
  ],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent]
})
export class SearchModule { }
