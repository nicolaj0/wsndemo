import { Component, OnInit } from '@angular/core';
import {FieldArrayType} from '@ngx-formly/core';

@Component({
  selector: 'app-quotation-enfant',
  template: `
    <div fxLayout="column" fxLayoutGap="30px">
      <div *ngFor="let field of field.fieldGroup; let i = index;">
        <mat-card >
          <mat-card-title>ENFANT {{i + 1}}</mat-card-title>
          <mat-card-content>
            <div fxLayout="row" fxLayoutAlign="flex-end">
              <button fxLayoutAlign="end" type="button" tabindex="-1" (click)="remove(i)" class="clear" mat-icon-button
                      color="warn">
                <mat-icon>clear</mat-icon>
              </button>
            </div>
            <formly-field class="col" [field]="field"></formly-field>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
    <div style="margin:30px 0;">
      <button (click)="add()" type="button" mat-raised-button>{{ to.addText }}</button>
    </div>
  `,
  styles: []
})
export class QuotationEnfantComponent extends FieldArrayType {



}
