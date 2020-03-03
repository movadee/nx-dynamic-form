import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormModule } from './form/form.module';

@NgModule({
  imports: [CommonModule, FormModule],
  declarations: [],
  exports: [FormModule]
})
export class UiComponentsModule {}
