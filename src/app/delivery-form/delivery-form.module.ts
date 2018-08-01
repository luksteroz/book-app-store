import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryFormComponent } from './delivery-form.component';
import { FormsModule } from '@angular/forms';
import { ZipCodeDirective } from '../directive/zip-code.directive';
import {NipValidateDirective} from '../directive/nip-validate.directive';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [DeliveryFormComponent, ZipCodeDirective, NipValidateDirective],
  exports: [DeliveryFormComponent]
})
export class DeliveryFormModule { }
