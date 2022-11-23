import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, BehaviorSubject } from 'rxjs';

import { each } from '../../shared/layouts.utils';

@Injectable()
export class PipRightnavService {
    public _floatingRightnav: MatSidenav;
    public _fixedRightnav: MatSidenav;
    private _onlyFloating = true;
    private _opened$: BehaviorSubject<boolean> = new BehaviorSubject(true);
    private _floatingRightnavAliases: string[] = ['xs', 'sm'];
    private _fixedRightnavMode$ = new BehaviorSubject<string>('side');

    public constructor(
        private media: MediaObserver
    ) { }

    public set floatingRightnavAliases(aliases: string[]) {
        this._floatingRightnavAliases = aliases;
    }

    public get floatingRightnavAliases() {
        return this._floatingRightnavAliases;
    }

    public set onlyFloating(only: boolean) {
        this._onlyFloating = only;
    }

    public get onlyFloating() {
        return this._onlyFloating;
    }

    public get floatingRightnav(): MatSidenav {
        return this._floatingRightnav;
    }

    public set floatingRightnav(rightnav: MatSidenav) {
        this._floatingRightnav = rightnav;
    }

    public set fixedRightnav(rightnav: MatSidenav) {
        this._fixedRightnav = rightnav;
    }

    public get fixedRightnav(): MatSidenav {
        return this._fixedRightnav;
    }

    public get fixedRightnavMode$(): Observable<string> {
        return this._fixedRightnavMode$.asObservable();
    }

    public get fixedRightnavMode(): string {
        return this._fixedRightnavMode$.getValue();
    }

    public set fixedRightnavMode(mode: string) {
        this._fixedRightnavMode$.next(mode);
    }

    public get opened$(): Observable<boolean> {
        return this._opened$;
    }

    public get opened(): boolean {
        return this._opened$.getValue();
    }

    public set opened(open: boolean) {
        this._opened$.next(open);
    }

    public toggleRightnav(rightnav?: MatSidenav) {
        if (rightnav) {
            rightnav.toggle();
        } else {
            this.isFloating() ? this.toggleFloatingRightnav() : this.toggleFixedRightnav();
        }
    }

    public openRightnav(rightnav?: MatSidenav) {
        if (rightnav) {
            rightnav.open();
        } else {
            this.isFloating() ? this.openFloatingRightnav() : this.openFixedRightnav();
        }
    }

    public closeRightnav(rightnav?: MatSidenav) {
        if (rightnav) {
            rightnav.close();
        } else {
            this.isFloating() ? this.closeFloatingRightnav() : this.closeFixedRightnav();
        }
    }

    public toggleFloatingRightnav() {
        if (this._floatingRightnav) {
            this._floatingRightnav.toggle();
            this.opened = this._floatingRightnav.opened;
        } else {
            console.log('rightnav not found');
        }
    }

    public toggleFixedRightnav() {
        if (this._fixedRightnav) {
            this._fixedRightnav.toggle();
            this.opened = this._fixedRightnav.opened;
        } else {
            console.log('rightnav not found');
        }
    }

    public openFloatingRightnav() {
        this._floatingRightnav ? this._floatingRightnav.open() : console.log('rightnav not found');
        this.opened = true;
    }

    public closeFloatingRightnav() {
        this._floatingRightnav ? this._floatingRightnav.close() : console.log('rightnav not found');
        this.opened = false;
    }

    public openFixedRightnav() {
        this._fixedRightnav ? this._fixedRightnav.open() : console.log('rightnav not found');
        this.opened = true;
    }

    public closeFixedRightnav() {
        this._fixedRightnav ? this._fixedRightnav.close() : console.log('rightnav not found');
        this.opened = false;
    }

    public changeStateRightnav(rightnav: MatSidenav = this._floatingRightnav) {
        if (rightnav) {

        } else {
            console.log('rightnav not found');
        }
    }

    private isFloating() {
        if (this._onlyFloating === true) { return true; }

        let is = false;

        each(this._floatingRightnavAliases, (alias: string) => {
            if (this.media.isActive(alias)) { is = true; }
        });

        return is;
    }

}
