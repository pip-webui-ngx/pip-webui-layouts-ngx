import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pip-scrollable',
    template: '<ng-content></ng-content>',
    styleUrls: ['./scrollable.component.scss']
})

export class PipScrollableComponent implements OnInit {

    ngOnInit() { }
}
