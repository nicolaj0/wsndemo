import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {Store} from '@ngrx/store';
import {Quotation} from '../../quotation.model';
import {addQuotation} from '../../quotation.actions';
import {of} from 'rxjs';

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
    // tslint:disable-next-line:max-line-length
    const tarifs = of('{"formulas":{"200":{"pricing":{"monthly":31.55,"yearly":378.6},"formula":200,"optionalWarranties":{"201":{"warranty":201,"pricing":null}}},"201":{"pricing":{"monthly":36.56,"yearly":438.66},"formula":201,"optionalWarranties":{"201":{"warranty":201,"pricing":null}}},"202":{"pricing":{"monthly":41.43,"yearly":497.16},"formula":202,"optionalWarranties":{"201":{"warranty":201,"pricing":null}}}},"isWithholdingThresholdExceeded":false,"maxCommission":0.0,"maxLoading":30.0,"maxFees":50.0,"selectedFees":12.0,"selectedLoading":1.0,"selectedFormula":200,"staggering":1,"selectedOptionnalWarranties":[],"commissionType":1,"healthRateLinear":1,"healthRateWithholding":1,"brokerCommissions":{"monthly":9.465,"yearly":113.58},"clientPrice":{"monthly":31.55,"yearly":378.6}}');
    tarifs.subscribe((data) => {
      this.model.quotationInfo = JSON.parse(data);
      this.store.dispatch(addQuotation({quotation: this.model}));
    });
  }
}
