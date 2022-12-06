import { Component, HostBinding, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { PipAppbarService } from '../appbar/shared/appbar.service';
import { PipMediaService } from '../media/index';
import { PipResizeEvent } from '../media/resize.directive';
import { PipSidenavPosition, PipSidenavService, PipSidenavSide, PipSidenavView } from '../sidenav/index';

type RootLayoutOptions = {
  [key in PipSidenavSide]: {
    view: PipSidenavView;
    opened: boolean;
    collapsed: boolean;
    width: number;
    rcm: number;
    mcm: number;
  };
};

type RootLayoutClasses = {
  [pos in PipSidenavPosition]: {
    classes: string[];
  };
};

@Component({
  selector: 'pip-root-layout',
  templateUrl: 'root-layout.component.html',
  styleUrls: ['./root-layout.component.scss'],
})
export class PipRootLayoutComponent implements OnDestroy {
  private _subs: { [name: string]: Subscription } = {};

  public psp = PipSidenavPosition;

  @HostBinding('class.pip-root-layout') readonly pipRootLayoutCls = true;

  @HostBinding('class.pip-with-tabs') get pipWithTabsCls() {
    return this.appbar.tabs?.length;
  }

  public mode$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public options$: Observable<RootLayoutOptions & RootLayoutClasses>;

  public constructor(
    public sidenav: PipSidenavService,
    private appbar: PipAppbarService,
    private mainMedia: PipMediaService,
  ) {
    this.options$ = combineLatest(
      this.sidenav.start.currentView$,
      this.sidenav.start.opened$,
      this.sidenav.start.collapsed$,
      this.sidenav.start.active$,
      this.sidenav.end.currentView$,
      this.sidenav.end.opened$,
      this.sidenav.end.collapsed$,
      this.sidenav.end.active$,
    ).pipe(
      map(([sview, sopened, scollapsed, sactive, rview, ropened, rcollapsed, eactive]) => {
        const sw = scollapsed
          ? sview?.widthCollapsed ?? this.sidenav.start.defaultView.widthCollapsed
          : sview?.width ?? this.sidenav.start.defaultView.width;
        const rw = rcollapsed
          ? rview?.widthCollapsed ?? this.sidenav.end.defaultView.widthCollapsed
          : rview?.width ?? this.sidenav.end.defaultView.width;
        return {
          [PipSidenavSide.Start]: {
            view: sview,
            opened: sopened,
            collapsed: scollapsed,
            width: sw,
            rcm:
              sopened && sview?.position === PipSidenavPosition.Root && ['side', 'push'].includes(sview.mode) ? sw : 0,
            mcm:
              sopened && sview?.position === PipSidenavPosition.Main && ['side', 'push'].includes(sview.mode) ? sw : 0,
            active: sactive,
          },
          [PipSidenavSide.End]: {
            view: rview,
            opened: ropened,
            collapsed: rcollapsed,
            width: rw,
            rcm:
              ropened && rview?.position === PipSidenavPosition.Root && ['side', 'push'].includes(rview.mode) ? rw : 0,
            mcm:
              ropened && rview?.position === PipSidenavPosition.Main && ['side', 'push'].includes(rview.mode) ? rw : 0,
            active: eactive,
          },
        };
      }),
      map(
        (options) =>
          ({
            ...options,
            ...Object.keys(PipSidenavPosition).reduce(
              (acc, key) => ({
                ...acc,
                [PipSidenavPosition[key]]: { classes: this.containerCls(options, PipSidenavPosition[key]) },
              }),
              {},
            ),
          } as any),
      ),
    );
  }

  ngOnDestroy() {
    Object.keys(this._subs).forEach((k) => this._subs[k] && this._subs[k].unsubscribe());
  }

  public onResizeMain(e: PipResizeEvent) {
    this.mainMedia.updateMainLayoutBreakpoints(e.newWidth);
  }

  public containerCls(ctx: RootLayoutOptions, position: PipSidenavPosition) {
    const res = [];
    for (const side of Object.keys(PipSidenavSide).map((k) => PipSidenavSide[k])) {
      if (ctx[side]?.view?.position === position) {
        if (ctx[side]?.opened) {
          res.push(`pip-sidenav-${side}-open`);
        }
        if (ctx[side]?.collapsed) {
          res.push(`pip-sidenav-${side}-collapsed`);
        }
      }
    }
    return res;
  }

  public backdropClick(): void {
    this.sidenav.start.close();
    this.sidenav.end.close();
  }
}
