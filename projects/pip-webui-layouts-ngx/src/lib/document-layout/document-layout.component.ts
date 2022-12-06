import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'pip-document-layout',
  styleUrls: ['./document-layout.component.scss'],
  templateUrl: './document-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.pip-document-layout]': 'true',
    '[class.pip-with-toolbar]': 'toolbar',
  },
})
export class PipDocumentLayoutComponent {
  private _toolbar = false;

  @Input()
  get toolbar(): boolean {
    return this._toolbar;
  }

  set toolbar(value: BooleanInput) {
    this._toolbar = coerceBooleanProperty(value);
    this.cd.markForCheck();
  }

  constructor(private cd: ChangeDetectorRef) {}
}
