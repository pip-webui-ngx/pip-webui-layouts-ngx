import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

import { PipMediaService } from '../../media/shared/media.service';
import { each } from '../../shared/layouts.utils';

@Injectable()
export class PipSidenavService {
    public _floatingSidenav: MatSidenav;
    public _fixedSidenav: MatSidenav;
    public _universalSidenav: MatSidenav;
    private _mode$: BehaviorSubject<string> = new BehaviorSubject('side');
    private _opened$: BehaviorSubject<boolean> = new BehaviorSubject(true);
    private _floatingSidenavAliases: string[] = ['xs', 'sm'];
    private _universalSidenavAliases: string[] = ['lt-sm', 'sm'];
    private _small = false;
    private _small$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private _active$: BehaviorSubject<boolean> = new BehaviorSubject(true);
    private _isUniversal$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public constructor(
        private media: PipMediaService
    ) { }

    public set floatingSidenavAliases(aliases: string[]) {
        this._floatingSidenavAliases = aliases;
    }

    public get small() {
        return this._small;
    }

    public set small(sm: boolean) {
        this._small$.next(sm);
        this._small = sm;
    }

    public get small$(): Observable<boolean> {
        return this._small$;
    }

    public get floatingSidenavAliases() {
        return this._floatingSidenavAliases;
    }

    public get universalSidenav(): MatSidenav {
        return this._universalSidenav;
    }

    public set universalSidenav(sidenav: MatSidenav) {
        this._universalSidenav = sidenav;
    }

    public get universalSidenavAliases() {
        return this._universalSidenavAliases;
    }

    public set universalSidenavAliases(aliases: string[]) {
        this._universalSidenavAliases = aliases;
    }

    public get isUniversal(): boolean {
        return this._isUniversal$.getValue();
    }

    public set isUniversal(val: boolean) {
        this._isUniversal$.next(val);
    }

    public get floatingSidenav(): MatSidenav {
        return this._floatingSidenav;
    }

    public set floatingSidenav(sidenav: MatSidenav) {
        this._floatingSidenav = sidenav;
    }

    public get fixedSidenav(): MatSidenav {
        return this._fixedSidenav;
    }

    public set fixedSidenav(sidenav: MatSidenav) {
        this._fixedSidenav = sidenav;
    }

    public get mode(): string {
        return this._mode$.getValue();
    }

    public get mode$(): Observable<string> {
        return this._mode$;
    }

    public set mode(s: string) {
        this._mode$.next(s);
    }

    public get opened(): boolean {
        return this._opened$.getValue();
    }

    public get opened$(): Observable<boolean> {
        return this._opened$;
    }

    public set opened(open: boolean) {
        this._opened$.next(open);
    }

    public get active$(): Observable<boolean> {
        return this._active$;
    }

    public set active(active: boolean) {
        this._active$.next(active);
    }

    public isActive(): boolean {
        if (this._active$.getValue() === true) { return true; } else {
            console.log('Sidenav is not active');
            return false;
        }
    }

    private toggleSmall() {
        this._small === true ? this.small = false : this.small = true;
    }

    public toggleNav(sidenav?: MatSidenav) {
        if (!this.isActive()) { return; }

        if (sidenav) {
            sidenav.toggle();
        } else if (this.isUniversal) {
            this.toggleUniversavNav();
        } else {
            this.isFloating() ? this.toggleFloatingNav() :  this.toggleFixedNav();
        }
    }

    public toggleOpened() {
        if (!this.isActive()) { return; }
        this.opened = !this.opened;
    }

    public openNav(sidenav?: MatSidenav) {
        if (!this.isActive()) { return; }

        if (sidenav) {
            sidenav.open();
        } else if (this.isUniversal) {
            this.openUniversavNav();
        } else {
            this.isFloating() ? this.openFloatingNav() : this.openFixedNav();
        }
        this.opened = true;
    }

    public closeNav(sidenav?: MatSidenav) {
        if (!this.isActive()) { return; }

        if (sidenav) {
            sidenav.close();
        } else if (this.isUniversal) {
            this.closeUniversavNav();
        } else {
            this.isFloating() ? this.closeFloatingNav() : this.closeFixedNav();
        }
        this.opened = false;
    }

    public toggleFloatingNav() {
        if (!this.isActive()) { return; }

        if (this._floatingSidenav) {
            this._floatingSidenav.toggle();
            this.opened = !this._floatingSidenav.opened;
        } else {
            console.log('Floating sidenav not found');
        }
    }

    public openFloatingNav() {
        this._floatingSidenav ? this._floatingSidenav.open() : console.log('Floating sidenav not found');
    }

    public closeFloatingNav() {
        this._floatingSidenav ? this._floatingSidenav.close() : console.log('Floating sidenav not found');
    }

    public toggleFixedNav() {
        this._fixedSidenav ? this.toggleSmall() : console.log('Fixed sidenav not found');
    }

    public openFixedNav() {
        this._fixedSidenav ? this.small = false : console.log('Fixed sidenav not found');
    }

    public closeFixedNav() {
        this._fixedSidenav ? this.small = true : console.log('Fixed sidenav not found');
    }

    public toggleUniversavNav() {
        this._universalSidenav ? this._universalSidenav.toggle() : console.log('Universal sidenav was not found');
    }

    public openUniversavNav() {
        this._universalSidenav ? this._universalSidenav.open() : console.log('Universal sidenav was not found');
    }

    public closeUniversavNav() {
        this._universalSidenav ? this._universalSidenav.close() : console.log('Universal sidenav was not found');
    }

    public changeStateNav(sidenav: MatSidenav = this._floatingSidenav) {
        if (sidenav) {

        } else {
            console.log('Sidenav not found');
        }
    }

    public isUniversalFloating() {
        let is = false;

        for (const alias of this._universalSidenavAliases) {
            if (this.media.isMainActive(alias)) {
                is = true;
                break;
            }
        }

        return is;
    }

    public isFloating() {
        let is = false;

        each(this._floatingSidenavAliases, (alias: string) => {
            if (this.media.isMainActive(alias)) { is = true; }
        });

        return is;
    }

}
