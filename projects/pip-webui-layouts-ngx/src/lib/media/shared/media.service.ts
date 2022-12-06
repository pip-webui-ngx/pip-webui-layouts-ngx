import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BreakPointRegistry, MediaChange, MediaObserver } from '@angular/flex-layout';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { MediaMainChange } from './media-main-change.model';

/** @dynamic */
@Injectable()
export class PipMediaService implements OnDestroy {
  private _mainLayoutBreakpoints: any = {};
  private _mainChange$: BehaviorSubject<MediaMainChange> = new BehaviorSubject<MediaMainChange>({ aliases: [] });
  private _subs = new Subscription();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private breakpoints: BreakPointRegistry,
    private media: MediaObserver,
  ) {
    this._setMainLayoutBreakpoints();
    this._subs.add(
      this.media.asObservable().subscribe((changes: MediaChange[]) => {
        const body = this.document.body;
        for (const alias of this.breakpoints.aliases) {
          body.classList[this.media.isActive(alias) ? 'add' : 'remove']('pip-' + alias);
        }
      }),
    );
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }

  private _isMainInclude(width: number, alias: string) {
    return this._mainLayoutBreakpoints[alias].max >= width && this._mainLayoutBreakpoints[alias].min <= width;
  }

  private _setMainLayoutBreakpoints() {
    const regExp = new RegExp(/\([a-z-]*: [0-9|\.]+px\)/g);
    this._mainLayoutBreakpoints = {};

    for (const item of this.breakpoints.items) {
      const matches = item.mediaQuery.match(regExp);
      this._mainLayoutBreakpoints[item.alias] = { min: 0, max: 10000, active: false };

      for (const match of matches) {
        const num = match.match(new RegExp(/[0-9|\.]+/g));
        if (num) {
          if (match.includes('max-width')) {
            this._mainLayoutBreakpoints[item.alias].max = Number(num);
          }
          if (match.includes('min-width')) {
            this._mainLayoutBreakpoints[item.alias].min = Number(num);
          }
        }
      }
    }
  }

  updateMainLayoutBreakpoints(width: number) {
    const body = this.document.body;
    const aliases = [];
    for (const alias of this.breakpoints.aliases) {
      this._mainLayoutBreakpoints[alias].active = this._isMainInclude(width, alias);
      body.classList[this._mainLayoutBreakpoints[alias].active ? 'add' : 'remove']('pip-main-' + alias);
      if (this._mainLayoutBreakpoints[alias].active) {
        aliases.push(alias);
      }
    }

    this._mainChange$.next({ aliases: aliases });
  }

  asObservableMain(): Observable<MediaMainChange> {
    return this._mainChange$.asObservable();
  }

  isMainActive(alias: string) {
    return this._mainLayoutBreakpoints[alias] && this._mainLayoutBreakpoints[alias].active;
  }
}
