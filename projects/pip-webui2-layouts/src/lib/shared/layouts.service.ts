import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';

import { PipMediaService } from '../media/shared/media.service';
import { PipSidenavService } from '../sidenav/shared/sidenav.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';

@Injectable()
export class PipLayoutsService {
    public constructor(
        private mainMedia: PipMediaService,
        private media: MediaObserver,
        private sidenav: PipSidenavService,
        private rightnav: PipRightnavService
    ) { }

    // Sidenav functions

    public set floatingSidenavAliases(aliases: string[]) {
        this.sidenav.floatingSidenavAliases = aliases;
    }

    public get smallSidenav() {
        return this.sidenav.small;
    }

    public set smallSidenav(sm: boolean) {
        this.sidenav.small = sm;
    }

    public get smallSidenav$(): Observable<boolean> {
        return this.sidenav.small$;
    }

    public get floatingSidenavAliases() {
        return this.sidenav.floatingSidenavAliases;
    }

    public get floatingSidenav(): MatSidenav {
        return this.sidenav.floatingSidenav;
    }

    public set floatingSidenav(sidenav: MatSidenav) {
        this.sidenav.floatingSidenav = sidenav;
    }

    public get fixedSidenav(): MatSidenav {
        return this.sidenav.fixedSidenav;
    }

    public set fixedSidenav(sidenav: MatSidenav) {
        this.sidenav.fixedSidenav = sidenav;
    }

    public get modeSidenav$(): Observable<string> {
        return this.sidenav.mode$;
    }

    public set modeSidenav(mode: string) {
        this.sidenav.mode = mode;
    }

    public get openedSidenav$(): Observable<boolean> {
        return this.sidenav.opened$;
    }

    public set openedSidenav(open: boolean) {
        this.sidenav.opened = open;
    }

    public get activeSidenav$(): Observable<boolean> {
        return this.sidenav.active$;
    }

    public set activeSidenav(active: boolean) {
        this.sidenav.active = active;
    }

    public toggleSidenav(sidenav?: MatSidenav) {
        this.sidenav.toggleNav();
    }

    public openSidenav(sidenav?: MatSidenav) {
        this.sidenav.openNav();
    }

    public closeSidenav(sidenav?: MatSidenav) {
        this.sidenav.closeNav();
    }

    // Rightnav functions

    public set floatingRightnavAliases(aliases: string[]) {
        this.rightnav.floatingRightnavAliases = aliases;
    }

    public get floatingRightnavAliases() {
        return this.rightnav.floatingRightnavAliases;
    }

    public set onlyFloatingRightnav(only: boolean) {
        this.rightnav.onlyFloating = only;
    }

    public get onlyFloatingRightnav() {
        return this.rightnav.onlyFloating;
    }

    public get floatingRightnav(): MatSidenav {
        return this.rightnav.floatingRightnav;
    }

    public set floatingRightnav(rightnav: MatSidenav) {
        this.rightnav.floatingRightnav = rightnav;
    }

    public set fixedRightnav(rightnav: MatSidenav) {
        this.rightnav.fixedRightnav = rightnav;
    }

    public get fixedRightnav(): MatSidenav {
        return this.rightnav.fixedRightnav;
    }

    public get openedRightnav$(): Observable<boolean> {
        return this.rightnav.opened$;
    }

    public set openedRightnav(open: boolean) {
        this.rightnav.opened = open;
    }

    public toggleRightnav(rightnav?: MatSidenav) {
        this.rightnav.toggleRightnav();
    }

    public openRightnav(rightnav?: MatSidenav) {
        this.rightnav.openRightnav();
    }

    public closeRightnav(rightnav?: MatSidenav) {
        this.rightnav.closeRightnav();
    }
}
