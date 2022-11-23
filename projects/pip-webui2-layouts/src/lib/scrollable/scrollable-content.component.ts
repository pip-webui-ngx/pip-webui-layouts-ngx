import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pip-scrollable-content',
    template: '<ng-content></ng-content>',
    styleUrls: ['./scrollable-content.component.scss']
})

export class PipScrollableContentComponent implements OnInit {

    ngOnInit() { }
}
