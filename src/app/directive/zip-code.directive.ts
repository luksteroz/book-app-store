import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appZipCode]',
  providers: [{provide: NG_VALIDATORS, useExisting: ZipCodeDirective, multi: true}]
})
export class ZipCodeDirective implements Validator  {
  constructor() { }
  @Input('appZipCode') currentZipCode: any;
  validate(control: AbstractControl): {[key: string]: any} | null {
    console.log(control.value);
    return this.currentZipCode;
  }
}

