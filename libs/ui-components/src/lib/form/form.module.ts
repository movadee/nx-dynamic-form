import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from '../form-elements/input/input.component';
import { FormBaseComponent } from './form-base.component';
import { FormElementComponent } from './form-element.component';
import { FormComponent } from './form.component';

const DYNAMICALLY_LOADEED_COMPONENTS = [InputComponent];

@NgModule({
  declarations: [
    FormComponent,
    FormBaseComponent,
    FormElementComponent,
    DYNAMICALLY_LOADEED_COMPONENTS
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormComponent],
  entryComponents: [DYNAMICALLY_LOADEED_COMPONENTS]
})
export class FormModule {}
