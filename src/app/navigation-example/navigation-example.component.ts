import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { PipSidenavService, PipSidenavPosition } from 'pip-webui-layouts-ngx';
import { Subscription, Observable, BehaviorSubject, merge, combineLatest, empty } from 'rxjs';
import { debounceTime, map, switchMap, filter, withLatestFrom, take, tap, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'pip-navigation-example',
  templateUrl: './navigation-example.component.html',
  styleUrls: ['./navigation-example.component.scss'],
})
export class NavigationExampleComponent implements OnDestroy {
  private sidenavViewManual$ = new BehaviorSubject<string>('default');
  private rightnavViewManual$ = new BehaviorSubject<string>('default');
  private subs = new Subscription();

  public aliases = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'lt-sm',
    'lt-md',
    'lt-lg',
    'lt-xl',
    'gt-xs',
    'gt-sm',
    'gt-md',
    'gt-lg',
  ];
  public modes = ['over', 'side', 'push'];

  public sidenavContext$: Observable<{
    view: string;
    views: string[];
    collapseable: boolean;
    collapsed: boolean;
    opened: boolean;
  }>;
  public sidenavPositions = Object.values(PipSidenavPosition);
  public sidenavView$: Observable<string>;
  public sidenavViews$: Observable<FormGroup>;
  public sidenavForm: FormGroup;

  public rightnavContext$: Observable<{
    view: string;
    views: string[];
    collapseable: boolean;
    collapsed: boolean;
    opened: boolean;
  }>;
  public rightnavPositions = Object.values(PipSidenavPosition);
  public rightnavView$: Observable<string>;
  public rightnavViews$: Observable<FormGroup>;
  public rightnavForm: FormGroup;

  // public filledContent = Array.from({ length: 50 }, () =>
  //   `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  //  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  //  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  constructor(private fb: FormBuilder, public sidenav: PipSidenavService) {
    // Sidenav
    this.sidenavView$ = merge(
      this.sidenavViewManual$.asObservable(),
      this.sidenav.start.currentView$.pipe(map((v) => v?.name ?? 'default')),
    ).pipe(distinctUntilChanged());
    this.sidenavForm = this.fb.group({
      position: null,
      alias: null,
      mode: null,
      collapseable: null,
      collapsed: null,
      opened: null,
      active: true,
      fixed: null,
      top: null,
      bottom: null,
      width: null,
      widthCollapsed: null,
    });
    this.sidenavContext$ = combineLatest(
      this.sidenavView$,
      this.sidenav.start.allViews$,
      this.sidenav.start.collapsed$,
      this.sidenav.start.opened$,
    ).pipe(
      map(([view, views, collapsed, opened]) => ({
        view,
        views: views.map((v) => v.name),
        collapseable: views?.find((v) => v.name === view)?.collapseable,
        collapsed,
        opened,
      })),
    );
    this.subs.add(
      this.sidenavView$
        .pipe(
          filter((v) => !!v),
          withLatestFrom(this.sidenav.start.allViews$),
          map(([view, views]) => views?.find((v) => v.name === view)),
        )
        .subscribe((view) => {
          this.sidenavForm.patchValue(
            {
              position: view.position,
              alias: view.alias,
              mode: view.mode,
              collapseable: view.collapseable,
              collapsed: view.collapsed,
              opened: view.opened,
              active: view.active ?? true,
              fixed: view.fixedInViewport,
              top: view.fixedTopGap,
              bottom: view.fixedBottomGap,
              width: view.width,
              widthCollapsed: view.widthCollapsed,
            },
            { emitEvent: false },
          );
          const aliasCtrl = this.sidenavForm.get('alias');
          if (view?.name === 'default') {
            aliasCtrl.disable({ emitEvent: false });
          } else if (aliasCtrl.disabled) {
            aliasCtrl.enable({ emitEvent: false });
          }
        }),
    );
    this.subs.add(
      this.sidenavForm.valueChanges
        .pipe(
          withLatestFrom(this.sidenavView$),
          map(([val, view]) => ({
            name: view,
            position: val.position,
            alias: val.alias,
            mode: val.mode,
            collapseable: val.collapseable,
            collapsed: val.collapsed,
            opened: val.opened,
            active: val.active,
            fixedInViewport: val.fixed,
            fixedTopGap: val.top,
            fixedBottomGap: val.bottom,
            width: val.width,
            widthCollapsed: val.widthCollapsed,
          })),
        )
        .subscribe((v) => this.sidenav.start.updateView(v)),
    );

    // Rightnav
    this.rightnavView$ = merge(
      this.rightnavViewManual$.asObservable(),
      this.sidenav.end.currentView$.pipe(map((v) => v?.name ?? 'default')),
    ).pipe(distinctUntilChanged());
    this.rightnavForm = this.fb.group({
      position: null,
      alias: null,
      mode: null,
      collapseable: null,
      collapsed: null,
      opened: null,
      active: true,
      fixed: null,
      top: null,
      bottom: null,
      width: null,
      widthCollapsed: null,
    });
    this.rightnavContext$ = combineLatest(
      this.rightnavView$,
      this.sidenav.end.allViews$,
      this.sidenav.end.collapsed$,
      this.sidenav.end.opened$,
    ).pipe(
      map(([view, views, collapsed, opened]) => ({
        view,
        views: views.map((v) => v.name),
        collapseable: views?.find((v) => v.name === view)?.collapseable,
        collapsed,
        opened,
      })),
    );
    this.subs.add(
      this.rightnavView$
        .pipe(
          filter((v) => !!v),
          withLatestFrom(this.sidenav.end.allViews$),
          map(([view, views]) => views?.find((v) => v.name === view)),
        )
        .subscribe((view) => {
          this.rightnavForm.patchValue(
            {
              position: view.position,
              alias: view.alias,
              mode: view.mode,
              collapseable: view.collapseable,
              collapsed: view.collapsed,
              opened: view.opened,
              active: view.active ?? true,
              fixed: view.fixedInViewport,
              top: view.fixedTopGap,
              bottom: view.fixedBottomGap,
              width: view.width,
              widthCollapsed: view.widthCollapsed,
            },
            { emitEvent: false },
          );
          const aliasCtrl = this.rightnavForm.get('alias');
          if (view?.name === 'default') {
            aliasCtrl.disable({ emitEvent: false });
          } else if (aliasCtrl.disabled) {
            aliasCtrl.enable({ emitEvent: false });
          }
        }),
    );
    this.subs.add(
      this.rightnavForm.valueChanges
        .pipe(
          withLatestFrom(this.rightnavView$),
          map(([val, view]) => ({
            name: view,
            position: val.position,
            alias: val.alias,
            mode: val.mode,
            collapseable: val.collapseable,
            collapsed: val.collapsed,
            opened: val.opened,
            active: val.active,
            fixedInViewport: val.fixed,
            fixedTopGap: val.top,
            fixedBottomGap: val.bottom,
            width: val.width,
            widthCollapsed: val.widthCollapsed,
          })),
        )
        .subscribe((v) => this.sidenav.end.updateView(v)),
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  changeSidenavView(view: string) {
    this.sidenavViewManual$.next(view);
  }
  toggleSidenavCollapse() {
    this.sidenav.start.toggleCollapse();
  }
  toggleSidenav() {
    this.sidenav.start.toggle();
  }

  changeRightnavView(view: string) {
    this.rightnavViewManual$.next(view);
  }
  toggleRightnavCollapse() {
    this.sidenav.end.toggleCollapse();
  }
  toggleRightnav() {
    this.sidenav.end.toggle();
  }
}
