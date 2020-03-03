import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBaseComponent } from './form-base.component';
import { ELEMENT_MAPPER } from './form-element.mapper';
import { FormElement } from './form.model';

@Component({
  selector: 'form-element',
  template: `
    <ng-container #container></ng-container>
  `
})
export class FormElementComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() formSectionId: string;
  @Input() formElement: FormElement;
  @ViewChild('container', { read: ViewContainerRef, static: true })
  public container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      ELEMENT_MAPPER[this.formElement.type]
    );
    const viewContainerRef = this.container;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);

    (componentRef.instance as FormBaseComponent).form = this.form;
    (componentRef.instance as FormBaseComponent).formSectionId = this.formSectionId;
    (componentRef.instance as FormBaseComponent).formElement = this.formElement;
  }
}
