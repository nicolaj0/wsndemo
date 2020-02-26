import {Component} from '@angular/core';
import {FieldWrapper} from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-panel',
  template: `
    <mat-card>
      <mat-card-title>
        <mat-icon>people</mat-icon>
        {{ to.label }}
      </mat-card-title>
      <mat-card-content>
        <div *ngIf="show ;else addFamliy">
          <mat-card>
            <mat-card-title>conjoint</mat-card-title>
            <mat-card-content>
              <div fxLayout="row" fxLayoutAlign="flex-end">
                <button fxLayoutAlign="end" type="button" tabindex="-1" (click)="show=false" class="clear" mat-icon-button
                        color="warn">
                  <mat-icon>clear</mat-icon>
                </button>
              </div>
              <ng-container #fieldComponent></ng-container>
            </mat-card-content>
          </mat-card>
        </div>
        <ng-template #addFamliy>
          <button (click)="show = true" type="button" mat-raised-button>Ajouter un conjoint</button>
        </ng-template>
      </mat-card-content>
    </mat-card>
  `,
})
export class PanelWrapperFamilyComponent extends FieldWrapper {
  show: boolean;
}
