import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { PipAppbarTab } from '../appbar.tab';

@Injectable()
export class PipAppbarService {

    public color = 'primary';
    public bgColor = 'primary';
    public fallbackToSelect: boolean;
    public fallbackSize = 'gt-xs';

    private _tabs$: BehaviorSubject<PipAppbarTab[]> = new BehaviorSubject([]);
    private _activeIdx$: BehaviorSubject<number> = new BehaviorSubject(null);

    public constructor(
        private router: Router
    ) {
        this.router.events
            .pipe(
                filter((e: RouterEvent) => e instanceof NavigationEnd),
                filter(() => this.tabs && this.tabs.length > 0)
            )
            .subscribe(() => { this._resolveActiveTabIndex(); });
    }

    private _resolveActiveTabIndex() {
        const defaultIdx = Math.max(this.tabs.findIndex(t => t.isDefault), 0);
        const navigation = this.router.getCurrentNavigation();
        let url = this.router.routerState.snapshot.url;
        if (navigation) {
            url = navigation.finalUrl.toString();
        }
        let idx = this.tabs.findIndex(t =>
            t.route
            && t.route.path
            && url.includes(Array.isArray(t.route.path) ? t.route.path.join('/') : t.route.path)
        );
        if (idx < 0) {
            idx = defaultIdx;
            this.router.navigate(this.tabs[idx].route.path, this.tabs[idx].route.extras);
        }
        this.activeIdx = idx;
    }

    public get tabs$(): Observable<PipAppbarTab[]> {
        return this._tabs$.asObservable();
    }

    public get tabs(): PipAppbarTab[] {
        return this._tabs$.getValue();
    }

    public set tabs(tabs: PipAppbarTab[]) {
        this._tabs$.next(tabs);
        if (tabs && tabs.length && (this.activeIdx >= tabs.length || this.activeIdx < 0 || this.activeIdx === null)) {
            this._resolveActiveTabIndex();
        }
    }

    public get activeIdx$(): Observable<number> {
        return this._activeIdx$.asObservable();
    }

    public get activeIdx(): number {
        return this._activeIdx$.getValue();
    }

    public set activeIdx(idx: number) {
        this._activeIdx$.next(idx);
    }

    public get activeTab$(): Observable<PipAppbarTab> {
        return combineLatest(
            this.tabs$,
            this.activeIdx$
        ).pipe(
            map(([tabs, idx]) => {
                return tabs && idx >= 0 && idx < tabs.length && tabs[idx] || null;
            })
        );
    }

    public get activeTab(): PipAppbarTab {
        return this.tabs && this.activeIdx >= 0 && this.activeIdx < this.tabs.length && this.tabs[this.activeIdx] || null;
    }

    public set activeTab(tab: PipAppbarTab) {
        if (!tab) { return; }
        const idx = this.tabs && this.tabs.findIndex(t => t.name === tab.name);
        if (idx >= 0) {
            this.activeIdx = idx;
        }
    }
}
