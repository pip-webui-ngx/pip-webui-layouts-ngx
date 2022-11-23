import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PipMainLayoutComponent } from './main-layout.component';
import { PipMediaService } from '../media/shared/media.service';
import { PipSidenavService } from '../sidenav/shared/sidenav.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';

describe('a main-layout component', () => {
    let component: PipMainLayoutComponent;
    let fixture: ComponentFixture<PipMainLayoutComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                PipMainLayoutComponent
            ],
            imports: [
                NoopAnimationsModule,
                CommonModule,
                FlexLayoutModule,
                MatSidenavModule
            ],
            providers: [
                PipMediaService,
                PipRightnavService,
                PipSidenavService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(PipMainLayoutComponent);
        component = fixture.componentInstance;
    });

    // instantiation through framework injection
    // beforeEach(inject([PipMainLayoutComponent], (MainLayoutComponent) => {
    //     component = MainLayoutComponent;
    // }));

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
