import {NgModule} from '@angular/core';
import {AppComponent} from '../app.component';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {BasketComponent} from './basket.component';
import {DeliveryFormComponent} from '../delivery-form/delivery-form.component';
import {DeliveryFormModule} from '../delivery-form/delivery-form.module';

@NgModule({
  imports: [
    CommonModule,
    DeliveryFormModule
  ],
  exports: [
    BasketComponent
  ],
  declarations: [
    BasketComponent
  ]
})
export class BasketModule {
}
