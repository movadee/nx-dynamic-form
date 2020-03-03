import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import { FormElement } from './form.model';

@Component({
  selector: 'form-base',
  template: ``
})
export class FormBaseComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() formSectionId: string;
  @Input() formElement: FormElement;
  public fieldControl: AbstractControl;
  public refControl: AbstractControl;

  ngOnInit() {
    this.fieldControl = this.form.get(
      this.formSectionId + '.' + this.formElement.id
    );
    if (this.formElement.condition) {
      this.refControl = this.form.get(
        this.formSectionId + '.' + this.formElement.condition.refId
      );
      this.refControl.valueChanges.subscribe(val => {
        if (val === this.formElement.condition.refValue) {
          this.fieldControl.enable();
        } else {
          this.fieldControl.disable();
        }
      });
    }
  }
}
