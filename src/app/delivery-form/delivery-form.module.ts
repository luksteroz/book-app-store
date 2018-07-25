import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryFormComponent } from './delivery-form.component';
import { FormsModule } from '@angular/forms';
import {ZipCodeDirective} from '../directive/zip-code.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DeliveryFormComponent, ZipCodeDirective],
  exports: [DeliveryFormComponent]
})
export class DeliveryFormModule { }
