import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appZipCode]',
  providers: [{provide: NG_VALIDATORS, useExisting: ZipCodeDirective, multi: true}]
})
export class ZipCodeDirective implements Validator  {
  constructor() { }
  regExp: any = '\\d{2}-\\d{3}';
  currentValue: string;
  @Input('appZipCode') currentZipCode: any;
  validate(control: AbstractControl): {[key: string]: any} | null {
    this.currentValue = control.value;
    return this.currentValue != null && this.currentValue.match(this.regExp) ? null : {'zipCodeError': true};
  }
}
