import { Injectable } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable, BehaviorSubject } from 'rxjs';

import { MediaMainChange } from './media-main-change.model';

@Injectable()
export class PipMediaService {
    constructor(
        private media: MediaObserver
    ) {
        this.media.asObservable().subscribe((change: any) => {
            this.updateBodyLayoutBreakpoints();
        });
        this.updateBodyLayoutBreakpoints();
        this.setMainLayoutBreakpoints();
    }

    private mainLayoutBreakpoints: any = {};
    private mainChange$: BehaviorSubject<MediaMainChange> = new BehaviorSubject<MediaMainChange>({ aliases: [] });

    // TODO: deprecated
    public activate() { }

    private updateBodyLayoutBreakpoints() {
        const body = document.body;
        for (const alias of this.media['breakpoints'].aliases) {
            body.classList[this.media.isActive(alias) ? 'add' : 'remove']('pip-' + alias);
        }
    }

    public updateMainLayoutBreakpoints(width: number) {
        const body = document.body;
        const aliases = [];
        for (const alias of this.media['breakpoints'].aliases) {
            this.mainLayoutBreakpoints[alias].active = this._isMainInclude(width, alias);
            body.classList[this.mainLayoutBreakpoints[alias].active ? 'add' : 'remove']('pip-main-' + alias);
            if (this.mainLayoutBreakpoints[alias].active) { aliases.push(alias); }
        }

        this.mainChange$.next({ aliases: aliases });
    }

    private setMainLayoutBreakpoints() {
        const regExp = new RegExp(/\([a-z-:' '0-9]+\)/g);
        this.mainLayoutBreakpoints = {};

        for (const item of this.media['breakpoints'].items) {
            const matches = item.mediaQuery.match(regExp);
            this.mainLayoutBreakpoints[item.alias] = { min: 0, max: 10000, active: false };

            for (const match of matches) {
                const num = match.match(new RegExp(/[0-9]+/g));
                if (num) {
                    if (match.includes('max-width')) { this.mainLayoutBreakpoints[item.alias].max = Number(num); }
                    if (match.includes('min-width')) { this.mainLayoutBreakpoints[item.alias].min = Number(num); }
                }
            }
        }
    }

    private _isMainInclude(width: number, alias: string) {
        return this.mainLayoutBreakpoints[alias].max >= width && this.mainLayoutBreakpoints[alias].min <= width;
    }

    public asObservableMain(): Observable<MediaMainChange> {
        return this.mainChange$;
    }

    public isMainActive(alias) {
        return this.mainLayoutBreakpoints[alias] && this.mainLayoutBreakpoints[alias].active;
    }
}
