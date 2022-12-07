import { PipSidenavSide } from './models/PipSidenavSide';
import { Injectable, Inject, Optional } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import defaultsDeep from 'lodash-es/defaultsDeep';
import cloneDeep from 'lodash-es/cloneDeep';
import { Observable, BehaviorSubject, of, combineLatest } from 'rxjs';
import { switchMap, map, shareReplay, distinctUntilChanged, tap } from 'rxjs/operators';

import {
  PipSidenavView,
  PipSidenavPosition,
  PipSidenavConfig,
  PIP_SIDENAV_START_CONFIG,
  PIP_SIDENAV_END_CONFIG,
} from './models/index';

@Injectable({
  providedIn: 'root',
})
export class PipSidenavService {
  private services: { [side in PipSidenavSide]?: PipSidenavController } = {};

  constructor(
    media: MediaObserver,
    @Optional() @Inject(PIP_SIDENAV_START_CONFIG) ssc: PipSidenavConfig,
    @Optional() @Inject(PIP_SIDENAV_END_CONFIG) sec: PipSidenavConfig,
  ) {
    this.services[PipSidenavSide.Start] = new PipSidenavController(media, ssc);
    this.services[PipSidenavSide.End] = new PipSidenavController(media, sec);
  }

  get start(): PipSidenavController {
    return this.services[PipSidenavSide.Start];
  }

  get end(): PipSidenavController {
    return this.services[PipSidenavSide.End];
  }
}

export class PipSidenavController {
  private _currentView: PipSidenavView;
  private _defaultView$: BehaviorSubject<PipSidenavView> = new BehaviorSubject<PipSidenavView>({
    name: 'default',
    position: PipSidenavPosition.Main,
    mode: 'over',
    width: 200,
    widthCollapsed: 64,
  });
  private _active$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private _collapsed$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _opened$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _toggleable$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private _views$: BehaviorSubject<PipSidenavView[]> = new BehaviorSubject<PipSidenavView[]>([]);

  public active$ = this._active$.asObservable();
  public collapsed$ = this._collapsed$.asObservable();
  public opened$ = this._opened$.asObservable();
  public views$ = this._views$.asObservable();
  public currentView$: Observable<PipSidenavView>;

  public constructor(private media: MediaObserver, sc: PipSidenavConfig) {
    if (sc) {
      if (sc.views && sc.views.length) {
        const defaultView = sc.views.find((v) => v.name === 'default');
        if (defaultView) {
          this.defaultView = defaultView;
        }
        const correctViews = sc.views?.filter((v) => v.alias) ?? [];
        if (correctViews && correctViews.length) {
          this.views = correctViews;
        }
      }
      if (sc.hasOwnProperty('opened')) {
        this._opened$.next(sc.opened);
      }
      if (sc.hasOwnProperty('active')) {
        this._active$.next(sc.active);
      }
    }
    this.currentView$ = combineLatest([this._defaultView$.asObservable(), this.views$]).pipe(
      switchMap(([defaultView, views]) => {
        const correctViews = views?.filter((v) => v.alias) ?? [];
        if (!views || !correctViews.length) {
          return of(defaultView);
        }
        return this.media.asObservable().pipe(
          map((changes: MediaChange[]) => {
            for (const change of changes) {
              for (const view of correctViews) {
                if (change.mqAlias === view.alias) {
                  return view;
                }
              }
            }
            return defaultView;
          }),
        );
      }),
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
      tap((v) => {
        this._currentView = v;
        if (this.collapsed !== v?.collapsed) {
          this.collapsed = v.collapsed;
        }
        if (v.hasOwnProperty('opened') && this.opened !== v?.opened) {
          this._opened$.next(v.opened);
        }
        if (v.hasOwnProperty('active') && this.active !== v?.active) {
          this._active$.next(v.active);
        } else if (!v.hasOwnProperty('active') && !this.active) {
          this._active$.next(true);
        }
        if (v.hasOwnProperty('collapsed') && this.collapsed !== v?.collapsed) {
          this._collapsed$.next(v.collapsed);
        }
      }),
      shareReplay(),
    );
  }

  //#region Properties
  public get defaultView$(): Observable<PipSidenavView> {
    return this._defaultView$.asObservable();
  }

  public get defaultView(): PipSidenavView {
    return new Proxy(this._defaultView$.value, {
      set: (target, p, value) => {
        const nv = cloneDeep(this._defaultView$.value);
        nv[p] = value;
        this._defaultView$.next(nv);
        return true;
      },
      defineProperty() {
        throw new Error();
      },
      deleteProperty() {
        throw new Error();
      },
    });
  }

  public set defaultView(defaultView: PipSidenavView) {
    this._defaultView$.next(defaultView);
  }

  public get active(): boolean {
    return this._active$.value;
  }

  public set active(active: boolean) {
    this._active$.next(active);
  }

  public get collapsed(): boolean {
    return this._collapsed$.value;
  }

  public set collapsed(collapsed: boolean) {
    this._collapsed$.next(collapsed);
  }

  public get opened(): boolean {
    return this._opened$.value;
  }

  public set opened(opened: boolean) {
    this._opened$.next(opened);
  }

  public get views(): PipSidenavView[] {
    return new Proxy(this._views$.value, {
      set() {
        throw new Error();
      },
      defineProperty() {
        throw new Error();
      },
      deleteProperty() {
        throw new Error();
      },
    });
  }

  public set views(views: PipSidenavView[]) {
    const vts = cloneDeep(views).map((view) =>
      defaultsDeep(view, {
        collapseable: false,
        collapsed: false,
        opened: false,
        width: 200,
        widthCollapsed: 64,
      } as PipSidenavView),
    );
    if (vts) {
      const di = vts.findIndex((v) => v.name === 'default');
      if (di !== -1) {
        this.defaultView = vts[di];
        vts.splice(di, 1);
      }
    }
    this._views$.next(vts);
  }

  public get allViews(): PipSidenavView[] {
    const dv = this._defaultView$.value;
    const vs = this._views$.value;
    return vs && vs.length ? [dv, ...vs] : [dv];
  }

  public get allViews$(): Observable<PipSidenavView[]> {
    return combineLatest([this.defaultView$, this.views$]).pipe(
      map(([dv, vs]) => (vs && vs.length ? [dv, ...vs] : [dv])),
    );
  }

  public get currentView(): PipSidenavView {
    return this._currentView;
  }

  //#endregion

  //#region Methods
  public expand() {
    if (!this.active) {
      return;
    }
    this.collapsed = true;
  }

  public collapse() {
    if (!this.active) {
      return;
    }
    this.collapsed = false;
  }

  public toggleCollapse() {
    if (!this.active) {
      return;
    }
    this.collapsed = !this.collapsed;
  }

  public open() {
    if (!this.active || this.opened) {
      return;
    }
    this.opened = true;
  }

  public close() {
    if (!this.active || !this.opened) {
      return;
    }
    this.opened = false;
  }

  public toggle() {
    if (!this.active) {
      return;
    }
    this.opened = !this.opened;
  }

  public createView(view: PipSidenavView) {
    if (view?.name === 'default') {
      return;
    }
    const views = this._views$.value;
    views.push(
      defaultsDeep(view, {
        collapseable: false,
        collapsed: false,
        width: 200,
        widthCollapsed: 64,
      } as PipSidenavView),
    );
    this._views$.next(views);
  }

  public updateView(view: PipSidenavView) {
    const populatedView = defaultsDeep(cloneDeep(view), {
      collapseable: false,
      collapsed: false,
      width: 200,
      widthCollapsed: 64,
    } as PipSidenavView);
    if (populatedView?.name === 'default') {
      this.defaultView = populatedView;
    } else {
      const views = this._views$.value.map((v) => (v.name === populatedView.name ? populatedView : v));
      this._views$.next(views);
    }
  }

  public removeViewAt(position: number) {
    const views = this._views$.value ?? [];
    if (position < 0 || position >= views.length) {
      return;
    }
    views.splice(position, 1);
    this._views$.next(views);
  }

  public removeView(name: string) {
    const views = (this._views$.value ?? []).filter((v) => v.name === name);
    this._views$.next(views);
  }

  //#endregion
}
