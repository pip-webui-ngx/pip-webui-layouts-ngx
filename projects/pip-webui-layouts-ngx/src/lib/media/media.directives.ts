import { Directive } from '@angular/core';
import { ShowHideDirective } from '@angular/flex-layout';

const selector = `[fxShow.document-lt-lg], [fxHide.document-lt-lg], [fxShow.document-lg], [fxHide.document-lg]`;
const inputs = ['fxShow.document-lt-lg', 'fxHide.document-lt-lg', 'fxShow.document-lg', 'fxHide.document-lg'];

// tslint:disable-next-line:use-input-property-decorator
@Directive({ selector, inputs })
export class PipShowHideDirective extends ShowHideDirective {
  // TODO: add explicit constructor
  protected inputs = inputs;
}
