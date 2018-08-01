import {Directive, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {NG_VALIDATORS, Validator} from '@angular/forms';
@Directive({
  selector: '[appNipValidate]',
  providers: [{provide: NG_VALIDATORS, useExisting: NipValidateDirective, multi: true}]
})
export class NipValidateDirective implements Validator {
  constructor() { }
  currentNip: string;
  regExpNip: any = '^\\d{3}(\\d{3}\\d{2}|\\d{2}\\d{3})\\d{2}$';
  @Input('appNipValidate') currentNipCode: any;
  validate(control: AbstractControl): {[key: string]: any} | null {
    this.currentNip = control.value;
    console.log(control.value);
    return this.currentNip != null && this.currentNip.match(this.regExpNip) ? null : {'nipError': true};
  }
}
