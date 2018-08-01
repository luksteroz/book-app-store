import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';
import { BasketComponent } from './basket/basket.component';
import { HeaderModule } from './header/header-module';
import { BooksComponent } from './books/books.component';
import { PageComponent } from './page/page.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {SearchModule} from './search-bar/search.module';
import {FormsModule} from '@angular/forms';
import {BasketModule} from './basket/basket-module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FooterComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StorageServiceModule,
    HeaderModule,
    SearchModule,
    BasketModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
