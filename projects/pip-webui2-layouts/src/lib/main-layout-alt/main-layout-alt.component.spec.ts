import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PipMainLayoutAltComponent } from './main-layout-alt.component';
import { PipMediaService } from '../media/shared/media.service';
import { PipSidenavService } from '../sidenav/shared/sidenav.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';

describe('a main-layout-alt component', () => {
    let component: PipMainLayoutAltComponent;
    let fixture: ComponentFixture<PipMainLayoutAltComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                PipMainLayoutAltComponent
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
        fixture = TestBed.createComponent(PipMainLayoutAltComponent);
        component = fixture.componentInstance;
    });

    // instantiation through framework injection
    // beforeEach(inject([PipMainLayoutAltComponent], (MainLayoutAltComponent) => {
    //     component = MainLayoutAltComponent;
    // }));

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
