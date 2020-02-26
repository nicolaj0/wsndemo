import { FormGroup } from '@angular/forms';

export abstract class FormGroupBaseComponent<T>  {
  public formGroup: FormGroup;

  onPatchValue(_data: T) {}
}

export function getFormGroupBaseDirective(type) {
  return {
    provide: FormGroupBaseComponent,
    useExisting: type
  };
}
