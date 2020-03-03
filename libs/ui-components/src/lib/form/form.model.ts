export class Form {
  name: string;
  sections: FormSection[];
}

export class FormSection {
  id: string;
  elements: FormElement[];
}

export class FormElement {
  id: string;
  type: string;
  label: string;
  validators?: Validators;
  condition?: Condition;
}

// Reference: https://angular.io/api/forms/Validators
export class Validators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  nullValidator?: any;
  compose?: any;
  composeAsync?: any;
}

export class Condition {
  refId: string;
  refValue: string;
}
