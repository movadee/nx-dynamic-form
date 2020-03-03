import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Form, FormElement, FormSection } from './form.model';

@Component({
  selector: 'ui-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {
  @Input() formMetadata: Form;
  @Input() formSectionId: string;
  public form: FormGroup;
  public formSection: FormSection;

  constructor() {}

  ngOnInit(): void {
    this.form = this.autoGenerateForm(this.formMetadata.sections);
  }

  ngOnChanges() {
    this.formSection = this.formMetadata.sections.find(
      section => section.id === this.formSectionId
    );
  }

  private autoGenerateForm(sections: FormSection[]): FormGroup {
    let mainForm = {};
    sections.forEach((section: FormSection) => {
      mainForm[section.id] = this.autoGenerateNestedForm(section.elements);
    });
    return new FormGroup(mainForm);
  }

  private autoGenerateNestedForm(elements: FormElement[]): FormGroup {
    let nestedForm = {};
    elements.forEach((element: FormElement) => {
      nestedForm[element.id] = new FormControl(
        '',
        this.autoGenerateValidators(element.validators)
      );
      if (element.condition) {
        nestedForm[element.id].disable();
      }
    });
    return new FormGroup(nestedForm);
  }

  private autoGenerateValidators(validators: Validators): any[] {
    let validatorsArr = [];
    if (validators) {
      Object.keys(validators).forEach(validator => {
        validator === 'required' && validators[validator]
          ? validatorsArr.push(Validators.required)
          : validatorsArr.push(Validators[validator](validators[validator]));
      });
    }
    return validatorsArr;
  }
}
