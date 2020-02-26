import {Component} from '@angular/core';
import {FieldWrapper} from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-panel',
  template: `
    <mat-card>
      <mat-card-title>
        <mat-icon>person</mat-icon>
        {{ to.label }}
      </mat-card-title>
      <mat-card-content>
        <ng-container #fieldComponent></ng-container>
      </mat-card-content>
    </mat-card>
  `,
})
export class PanelWrapperComponent extends FieldWrapper {
  show: boolean;
}
