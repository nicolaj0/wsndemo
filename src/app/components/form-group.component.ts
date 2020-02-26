import {
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {FormGroupBaseComponent} from './form-group-base.component';

@Component({
  selector: 'wz-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit, AfterContentInit, DoCheck {
  @Input() includedControls: string[];
  @Input() excludedControls: string[];
  @Input() expandable = false;
  @Input() expanded = true;
  @Input() disabled = false;

  @ContentChild(FormGroupBaseComponent, {static: true}) group: FormGroupBaseComponent<any>;

  @ViewChild('contentEl', {static: false}) contentEl: ElementRef;


  private oldContentElemCount = 0;


  ngOnInit(): void {
  }

  ngAfterContentInit() {

  }

  get percentageCompletion() {
    return 100;
  }

  get showValidBar() {
    return true;
  }

  get showErrorBar() {
    return false;
  }

  get showPristineBar() {
    return true;
  }

  ngDoCheck() {
    if (!this.disabled || !this.contentEl || !this.contentEl.nativeElement) {
      return;
    }

    const element = this.contentEl.nativeElement as Element;
    const elems = element.querySelectorAll('*');
    if (elems.length !== this.oldContentElemCount) {
      this.oldContentElemCount = elems.length;
      let i = 0,
        length = elems.length;
      for (; i < length; i++) {
        const el = elems[i];
        el.setAttribute('tabIndex', '-1');
      }
    }
  }
}
