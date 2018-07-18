import {NgModule} from '@angular/core';
import {AppComponent} from '../app.component';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {BasketComponent} from './basket.component';
import {DeliveryFormComponent} from '../delivery-form/delivery-form.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    BasketComponent
  ],
  declarations: [
    BasketComponent,
    DeliveryFormComponent
  ],
  bootstrap: [AppComponent]
})
export class BasketModule {
}
