import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {Store} from '@ngrx/store';
import {Quotation} from '../../quotation.model';
import {addQuotation} from '../../quotation.actions';

const fieldGroup = () => {
  return [
    {
      key: 'dateNaissance',
      type: 'input',
      templateOptions: {
        required: true,
        type: 'date',
        label: 'Date de naissance',
      },
    },
    {
      key: 'dateEffet',
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
    }];
};

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})

export class QuotationComponent {
  constructor(private store: Store<Quotation>) {
  }

  form = new FormGroup({});
  model: Quotation = {id: null};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'assurePrincipal',
      wrappers: ['panel'],
      templateOptions: {label: 'Assuré principal'},
      fieldGroup: fieldGroup(),
    },
    {
      key: 'conjoint',
      wrappers: ['panelFamily'],
      templateOptions: {
        label: 'Conjoint',
      },
      fieldGroup: fieldGroup(),
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
        fieldGroup: fieldGroup()
      }
    }
  ];

  getTarif() {
    this.store.dispatch(addQuotation({quotation: this.model}));
  }
}
