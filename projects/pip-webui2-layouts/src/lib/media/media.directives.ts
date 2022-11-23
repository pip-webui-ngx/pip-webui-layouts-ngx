import { Directive } from '@angular/core';
import { ShowHideDirective } from '@angular/flex-layout';

const selector = `[fxShow.document-lt-lg], [fxHide.document-lt-lg]`;
const inputs = ['fxShow.document-lt-lg', 'fxHide.document-lt-lg'];

// tslint:disable-next-line:use-input-property-decorator
@Directive({ selector, inputs })
export class PipShowHideDirective extends ShowHideDirective {
    protected inputs = inputs;
}
