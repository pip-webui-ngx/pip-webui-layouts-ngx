import { Component, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Component({
    selector: 'pip-document-layout',
    styleUrls: ['./document-layout.component.scss'],
    templateUrl: './document-layout.component.html'
})
export class PipDocumentLayoutComponent implements OnInit, OnDestroy {
    @Input() set toolbar(toolbar: boolean | string) {
        this.elRef.nativeElement.classList[toolbar === 'true' || toolbar === true ? 'add' : 'remove']('pip-with-toolbar');
    }

    constructor(
        private renderer: Renderer2,
        private elRef: ElementRef
    ) {
        renderer.addClass(elRef.nativeElement, 'pip-document-layout');
    }

    public ngOnInit() {

    }

    public ngOnDestroy() {

    }
}
