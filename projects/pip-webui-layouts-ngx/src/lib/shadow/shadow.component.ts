import { Component, ElementRef, Input } from '@angular/core';

import { ShadowAttachmentSide } from './shared/ShadowAttachmentSide.model';

@Component({
  selector: 'pip-shadow',
  template: '',
  styleUrls: ['./shadow.component.scss'],
})
export class PipShadowComponent {
  @Input() set visible(isVisible: boolean) {
    switch (this._attachmentSide) {
      case ShadowAttachmentSide.top: {
        this.el.nativeElement.style.cssText = isVisible ? 'top: -2px' : 'top: -30px';
        break;
      }

      case ShadowAttachmentSide.left: {
        this.el.nativeElement.style.cssText = isVisible ? 'left: -2px' : 'left: -30px';
        break;
      }

      case ShadowAttachmentSide.right: {
        this.el.nativeElement.style.cssText = isVisible ? 'right: -2px' : 'right: -30px';
        break;
      }

      case ShadowAttachmentSide.bottom: {
        this.el.nativeElement.style.cssText = isVisible ? 'bottom: -2px' : 'bottom: -30px';
        break;
      }
    }
  }

  @Input() set attachmentSide(side: string) {
    const index = ShadowAttachmentSide.all.indexOf(side);
    this._attachmentSide = index > -1 ? side : ShadowAttachmentSide.top;
    this.el.nativeElement.classList.add([this._acttacnmentSideClasses[this._attachmentSide]]);
  }

  private _attachmentSide: string = null;
  private _acttacnmentSideClasses: any = {
    top: 'pip-top-shadow',
    left: 'pip-left-shadow',
    right: 'pip-right-shadow',
    bottom: 'pip-bottom-shadow',
  };

  constructor(private el: ElementRef) {}
}
