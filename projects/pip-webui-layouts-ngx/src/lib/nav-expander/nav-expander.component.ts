import { Component, Input } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PipMediaService } from '../media/shared/media.service';
import { PipSidenavService, PipSidenavSide } from '../sidenav/index';

@Component({
  selector: 'pip-nav-expander',
  templateUrl: 'nav-expander.component.html',
  styleUrls: ['./nav-expander.component.scss'],
})
export class PipNavExpanderComponent {
  private _side$ = new BehaviorSubject<PipSidenavSide>(PipSidenavSide.Start);

  @Input()
  public set side(side: PipSidenavSide) {
    this._side$.next(side);
  }

  @Input() public expandIcon = 'chevron_right';
  @Input() public collapseIcon = 'chevron_left';
  public icon$: Observable<string>;
  public show$: Observable<boolean>;

  constructor(public media: PipMediaService, public sidenav: PipSidenavService) {
    this.icon$ = this._side$.asObservable().pipe(
      switchMap((side) =>
        side === PipSidenavSide.Start ? this.sidenav.start.collapsed$ : this.sidenav.end.collapsed$,
      ),
      map((e) => (e ? this.expandIcon : this.collapseIcon)),
    );
    this.show$ = this._side$.asObservable().pipe(
      switchMap((side) =>
        side === PipSidenavSide.Start ? this.sidenav.start.currentView$ : this.sidenav.end.currentView$,
      ),
      map((v) => v.collapseable),
    );
  }

  toggleCollapse() {
    this.sidenav[this._side$.value].toggleCollapse();
  }
}
