import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'assure',
      wrappers: ['panel'],
      templateOptions: {label: 'Assuré principal'},
      fieldGroup: [
        {
          key: 'birthDate',
          type: 'input',
          templateOptions: {
            required: true,
            type: 'date',
            label: 'Date de naissance',
          },
        },
        {
          key: 'effectiveDate',
          type: 'input',
          templateOptions: {
            required: true,
            type: 'date',
            label: 'Date d\'effet',
          }
        },
        {
          key: 'regimeSocial',
          type: 'select',
          templateOptions: {
            label: 'Regime',
            options: [
              {
                value: null,
                label: ' -- '
              },
              {
                value: 1,
                label: 'General'
              },
              {
                value: 2,
                label: 'Agricole'
              },
              {
                value: 3,
                label: 'TNS'
              }
            ]
          },
        }],
    },
    {
      key: 'famille',
      wrappers: ['panelFamily'],
      templateOptions: {
        label: 'Conjoint',
      },
      fieldGroup: [
        {
          key: 'birthDate',
          type: 'input',
          templateOptions: {
            required: true,
            type: 'date',
            label: 'Date de naissance',
          },
        },
        {
          key: 'effectiveDate',
          type: 'input',
          templateOptions: {
            required: true,
            type: 'date',
            label: 'Date d\'effet',
          }
        },
        {
          key: 'regimeSocial',
          type: 'select',
          templateOptions: {
            label: 'Regime',
            options: [
              {
                value: null,
                label: ' -- '
              },
              {
                value: 1,
                label: 'General'
              },
              {
                value: 2,
                label: 'Agricole'
              },
              {
                value: 3,
                label: 'TNS'
              }
            ]
          },
        }],
    },
    {
      key: 'enfants',
      wrappers: ['panel'],
      type: 'repeat',
      templateOptions: {
        label: 'Enfants',
        addText: 'Ajouter un enfant',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'birthDate',
            type: 'input',
            templateOptions: {
              required: true,
              type: 'date',
              label: 'Date de naissance',
            },
          },
          {
            key: 'effectiveDate',
            type: 'input',
            templateOptions: {
              required: true,
              type: 'date',
              label: 'Date d\'effet',
            }
          },
          {
            key: 'regimeSocial',
            type: 'select',
            templateOptions: {
              label: 'Regime',
              options: [
                {
                  value: null,
                  label: ' -- '
                },
                {
                  value: 1,
                  label: 'General'
                },
                {
                  value: 2,
                  label: 'Agricole'
                },
                {
                  value: 3,
                  label: 'TNS'
                }
              ]
            },
          }]
      }
    }
  ];

  tarif() {

  }
}
