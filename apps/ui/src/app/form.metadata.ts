export const FORM_METADATA = {
  name: 'POC Form',
  sections: [
    {
      id: 'step1',
      elements: [
        {
          id: 'firstname',
          type: 'input',
          label: 'First Name',
          validators: {
            minLength: 2,
            required: true
          }
        },
        {
          id: 'lastname',
          type: 'input',
          label: 'Last Name',
          validators: {
            required: true,
            minLength: 4
          },
          condition: {
            refId: 'firstname',
            refValue: 'alla'
          }
        }
      ]
    },
    {
      id: 'step2',
      elements: [
        {
          id: 'test',
          type: 'input',
          label: 'Test',
          validators: {
            minLength: 2,
            required: true
          }
        }
      ]
    }
  ]
};
