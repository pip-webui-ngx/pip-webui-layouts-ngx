import { Component, OnInit, Input } from '@angular/core';
import { UrlTree, Router } from '@angular/router';

import { PipAppbarTab } from './appbar.tab';
import { PipAppbarService } from './shared/appbar.service';
import { PipMediaService } from '../media/shared/media.service';

@Component({
    selector: 'pip-appbar',
    templateUrl: 'appbar.component.html',
    styleUrls: ['./appbar.component.scss']
})
export class PipAppbarComponent implements OnInit {

    public selectedTabIdx: number;

    constructor(
        private router: Router,
        public appbar: PipAppbarService,
        public media: PipMediaService
    ) { }

    ngOnInit() { }

    public isActive(url: string[]): boolean {
        return this.router.isActive(this.router.createUrlTree(url), false);
    }

    public navigate(link: PipAppbarTab) {
        this.router.navigate(link.route.path);
    }
}
