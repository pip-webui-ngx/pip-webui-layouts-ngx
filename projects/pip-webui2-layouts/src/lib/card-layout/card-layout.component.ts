import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'pip-card-layout',
    template: '<div class="card-container"><ng-content></ng-content></div>',
    styleUrls: ['./card-layout.component.scss']
})

export class PipCardLayoutComponent implements OnInit {
    @Input() set transparent(transparent: boolean | string) {
        this.elRef.nativeElement.classList[transparent === 'true' || transparent === true ? 'add' : 'remove']('pip-transparent-card');
    }

    constructor(
        private elRef: ElementRef
    ) { }

    ngOnInit() { }
}
