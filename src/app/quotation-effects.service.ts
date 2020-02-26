import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {observable, Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {addQuotation, addQuotationSuccess} from './quotation.actions';
import {map, switchMap} from 'rxjs/operators';


@Injectable()
export class QuotationEffects {


  /*@Effect() updateMapping$: Observable<Action> = this.actions$.pipe(
    ofType(addQuotation),
    switchMap((payload) => {
        // tslint:disable-next-line:max-line-length
        const tarifs = of('{"formulas":{"200":{"pricing":{"monthly":31.55,"yearly":378.6},"formula":200,"optionalWarranties":{"201":{"warranty":201,"pricing":null}}},"201":{"pricing":{"monthly":36.56,"yearly":438.66},"formula":201,"optionalWarranties":{"201":{"warranty":201,"pricing":null}}},"202":{"pricing":{"monthly":41.43,"yearly":497.16},"formula":202,"optionalWarranties":{"201":{"warranty":201,"pricing":null}}}},"isWithholdingThresholdExceeded":false,"maxCommission":0.0,"maxLoading":30.0,"maxFees":50.0,"selectedFees":12.0,"selectedLoading":1.0,"selectedFormula":200,"staggering":1,"selectedOptionnalWarranties":[],"commissionType":1,"healthRateLinear":1,"healthRateWithholding":1,"brokerCommissions":{"monthly":9.465,"yearly":113.58},"clientPrice":{"monthly":31.55,"yearly":378.6}}');
        return addQuotationSuccess({quotation: payload.quotation});


      }
    );*/

  constructor(private actions$: Actions) {
  }

}
