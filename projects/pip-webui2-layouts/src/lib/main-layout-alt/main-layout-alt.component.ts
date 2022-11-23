import {
    Component,
    Renderer2,
    ElementRef,
    Input,
    OnInit,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    ChangeDetectorRef
} from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { BehaviorSubject, Subscription, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MatSidenav } from '@angular/material/sidenav';
import { addResizeListener } from '../media/resize-layout.function';
import { PipMediaService } from '../media/shared/media.service';
import { PipSidenavService } from '../sidenav/shared/sidenav.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';
import { MediaMainChange } from '../media/shared/media-main-change.model';
import { PipAppbarService } from '../appbar/shared/appbar.service';

@Component({
    selector: 'pip-main-layout-alt',
    templateUrl: 'main-layout-alt.component.html',
    styleUrls: ['./main-layout-alt.component.scss']
})
export class PipMainLayoutAltComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() public pipContainer;
    @ViewChild('universalSidenav', { static: true }) sidenav: MatSidenav;
    @ViewChild('fixedRightnav', { static: true }) rightnav: MatSidenav;

    private listener: any;
    private element: any;
    private _subs: Subscription = new Subscription();

    public uFloating$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public small$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public activeSidenav$: Observable<boolean>;

    constructor(
        private renderer2: Renderer2,
        private appbar: PipAppbarService,
        private elRef: ElementRef,
        private cd: ChangeDetectorRef,
        private mainMedia: PipMediaService,
        public sidenavService: PipSidenavService,
        public rightnavService: PipRightnavService,
        private media: MediaObserver
    ) {
        this.renderer2.addClass(this.elRef.nativeElement, 'pip-main-layout-alt');
        let showing = false;
        this._subs.add(this.appbar.tabs$.pipe(map(t => t && t.length > 0)).subscribe(show => {
            if (show === showing) { return; }
            showing = show;
            if (showing) {
                renderer2.addClass(this.elRef.nativeElement, 'pip-with-tabs');
            } else {
                renderer2.removeClass(this.elRef.nativeElement, 'pip-with-tabs');
            }
        }));
        this.listener = () => { this.onResize(); };
        this.sidenavService.fixedSidenav = null;
        this.sidenavService.isUniversal = true;
        this.sidenavService.opened = false;
        this.sidenavService.mode = 'over';
        this.activeSidenav$ = combineLatest(this.sidenavService.opened$, this.sidenavService.active$)
            .pipe(
                map(([opened, active]) => {
                    return opened && active;
                })
            );
    }

    public ngOnInit() {
        if (this.pipContainer != null) {
            const firstSym = this.pipContainer.substr(0, 1);

            const element: any = firstSym === '#'
                ? document.getElementById(this.pipContainer.substring(1, this.pipContainer.length))
                : firstSym === '.'
                    ? document.getElementsByClassName(this.pipContainer.substring(1, this.pipContainer.length))
                    : document.getElementsByTagName(this.pipContainer);
            this.element = firstSym === '#' ? element : element.length > 0 ? element[0] : this.elRef.nativeElement;
        } else {
            this.element = this.elRef.nativeElement;
        }

        addResizeListener(this.element, this.listener);
        setTimeout(() => {
            this.mainMedia.updateMainLayoutBreakpoints(this.element.offsetWidth);
        });
        this.rightnavService.opened$.subscribe((opened: boolean) => {
            if (this.rightnavService._fixedRightnav) { this.onResize(); }
            this.cd.detectChanges();
        });

        this.media.asObservable().subscribe((change: any) => {
            if (this.rightnavService.onlyFloating === true) { return; }

            if (this.sidenavService.floatingSidenavAliases.includes(change.mqAlias)) {
                if (this.rightnavService.fixedRightnav
                    && this.rightnavService.fixedRightnav.opened
                    && this.rightnavService.floatingRightnav) {
                    this.rightnavService.closeFixedRightnav();
                    this.rightnavService.floatingRightnav.open();
                }
            } else {
                if (this.rightnavService.floatingRightnav && this.rightnavService.floatingRightnav.opened) {
                    if (this.rightnavService.fixedRightnav) { this.rightnavService.fixedRightnav.open(); }
                    this.rightnavService.floatingRightnav.close();
                }
            }
        });
    }

    public ngOnDestroy() {
        removeEventListener(this.element, this.listener);
        this._subs.unsubscribe();
    }

    ngAfterViewInit() {
        this.uFloating$.next(this.sidenavService.isUniversalFloating());
        this._subs.add(this.mainMedia.asObservableMain()
            .subscribe((change: MediaMainChange) => {
                const floating = this.sidenavService.isUniversalFloating();
                if (this.uFloating$.getValue() !== floating) {
                    setTimeout(() => this.uFloating$.next(floating), 0);
                }
            }));
        this.onResize();
        this.sidenavService.universalSidenav = this.sidenav;
        this.rightnavService.fixedRightnav = this.rightnav;
    }

    public backdropClick(): void {
        this.sidenavService.closeNav();
    }

    private onResize() {
        const rightnavWidth = this.rightnavService._fixedRightnav && this.rightnavService._fixedRightnav.opened
            ? this.rightnavService._fixedRightnav['_elementRef'].nativeElement.offsetWidth
            : 0;
        this.mainMedia.updateMainLayoutBreakpoints(this.element.offsetWidth - rightnavWidth);
    }
}
