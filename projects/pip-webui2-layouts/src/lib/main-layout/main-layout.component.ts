import { Component, ElementRef, Input, OnInit, AfterViewInit, OnDestroy, ViewChild, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { MatSidenav } from '@angular/material/sidenav';
import { addResizeListener } from '../media/resize-layout.function';
import { PipMediaService } from '../media/shared/media.service';
import { PipSidenavService } from '../sidenav/shared/sidenav.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';
import { PipAppbarService } from '../appbar/shared/appbar.service';

@Component({
    selector: 'pip-main-layout',
    templateUrl: 'main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class PipMainLayoutComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() public pipContainer;
    @ViewChild('fixedSidenav', { static: true }) sidenav: MatSidenav;
    @ViewChild('fixedRightnav', { static: true }) rightnav: MatSidenav;

    private listener: any;
    private element: any;
    private _subs: Subscription = new Subscription();

    private _opened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public small$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private renderer: Renderer2,
        private elRef: ElementRef,
        private cd: ChangeDetectorRef,
        private appbar: PipAppbarService,
        private mainMedia: PipMediaService,
        private sidenavService: PipSidenavService,
        private rightnavService: PipRightnavService,
        private media: MediaObserver
    ) {
        renderer.addClass(elRef.nativeElement, 'pip-main-layout');
        let showing = false;
        this._subs.add(this.appbar.tabs$.pipe(map(t => t && t.length > 0)).subscribe(show => {
            if (show === showing) { return; }
            showing = show;
            showing ? renderer.addClass(elRef.nativeElement, 'pip-with-tabs') : renderer.removeClass(elRef.nativeElement, 'pip-with-tabs');
        }));
        this.listener = () => { this.onResize(); };
    }

    public get opened$(): Observable<boolean> {
        return this._opened$;
    }

    public get active$(): Observable<boolean> {
        return this.sidenavService.active$;
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

        this.sidenavService.small$.subscribe((small) => {
            this.small$.next(small);
            this.cd.detectChanges();
        });
    }

    public ngOnDestroy() {
        removeEventListener(this.element, this.listener);
        this._subs.unsubscribe();
    }

    ngAfterViewInit() {
        this.sidenavService.fixedSidenav = this.sidenav;
        this.rightnavService.fixedRightnav = this.rightnav;
        this.onResize();
    }

    private onResize() {
        const rightnavWidth = this.rightnavService._fixedRightnav && this.rightnavService._fixedRightnav.opened
            ? this.rightnavService._fixedRightnav['_elementRef'].nativeElement.offsetWidth
            : 0;
        this.mainMedia.updateMainLayoutBreakpoints(this.element.offsetWidth - rightnavWidth);
    }
}
