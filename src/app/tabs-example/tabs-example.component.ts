import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { cloneDeep } from 'lodash';
import { PipAppbarService, PipAppbarTab } from 'pip-webui-layouts-ngx';

@Component({
  selector: 'pip-tabs-example',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./tabs-example.component.scss'],
})
export class TabsExampleComponent implements OnInit, OnDestroy {
  private _savedTabs: PipAppbarTab[];

  constructor(private appbar: PipAppbarService, private translate: TranslocoService) {
    this._savedTabs = cloneDeep(this.appbar.tabs);
    this.appbar.tabs = [
      {
        name: () => this.translate.translate('PAGE.TAB.FIRST'),
        route: {
          path: ['/tabs/glue/1'],
        },
      },
      {
        name: () => this.translate.translate('PAGE.TAB.SECOND'),
        route: {
          path: ['/tabs/glue/2'],
        },
        isDefault: true,
      },
    ];
    this.appbar.fallbackToSelect = true;
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.appbar.tabs = this._savedTabs;
  }
}
