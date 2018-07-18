import { BasketComponent} from './basket/basket.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from './books/books.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
export const routes: Routes = [
  { path: 'koszyk', component: BasketComponent },
  { path: 'ksiazki', component: BooksComponent },
  { path: 'szukaj', component: SearchBarComponent },
  { path: '', redirectTo:'ksiazki', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
