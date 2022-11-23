import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cloneDeep } from 'lodash';
import { PipAppbarService, PipAppbarTab } from 'pip-webui2-layouts';

@Component({
    selector: 'app-tabs-example',
    template: '<router-outlet></router-outlet>',
    styleUrls: ['./tabs-example.component.scss']
})
export class TabsExampleComponent implements OnInit, OnDestroy {

    private _savedTabs: PipAppbarTab[];

    constructor(
        private appbar: PipAppbarService
    ) {
        this._savedTabs = cloneDeep(this.appbar.tabs);
        this.appbar.tabs = [
            {
                name: 'First',
                route: {
                    path: ['/tabs/glue/1']
                }
            },
            {
                name: 'Second',
                route: {
                    path: ['/tabs/glue/2']
                },
                isDefault: true
            }
        ];
        this.appbar.fallbackToSelect = true;
    }

    ngOnInit() { }

    ngOnDestroy() { this.appbar.tabs = this._savedTabs; }

}
