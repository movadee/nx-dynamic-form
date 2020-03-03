import { Component } from '@angular/core';
import { Form } from '@ui/ui-components';

import { FORM_METADATA } from './form.metadata';

@Component({
  selector: 'ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui';
  public formMetadata: Form;
  public formSections: any[];
  public idx = 0;

  constructor() {
    this.formMetadata = FORM_METADATA;
    this.formSections = this.formMetadata.sections.map(section => section.id);
  }

  public continue(): void {
    if (this.formSections[this.idx + 1]) {
      this.idx++;
    }
  }

  public back(): void {
    if (this.formSections[this.idx - 1]) {
      this.idx--;
    }
  }
}
