import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PipRootLayoutComponent } from './root-layout.component';
import { PipMediaService } from '../media/shared/media.service';
import { PipSidenavService } from '../sidenav/shared/sidenav.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';

describe('a root-layout component', () => {
    let component: PipRootLayoutComponent;
    let fixture: ComponentFixture<PipRootLayoutComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                PipRootLayoutComponent
            ],
            imports: [
                NoopAnimationsModule,
                FlexLayoutModule,
                MatSidenavModule
            ],
            providers: [
                PipMediaService,
                PipRightnavService,
                PipSidenavService
            ]
        });
        fixture = TestBed.createComponent(PipRootLayoutComponent);
        component = fixture.componentInstance;
    });

    // instantiation through framework injection
    // beforeEach(inject([PipRootLayoutComponent], (RootLayoutComponent) => {
    //     component = RootLayoutComponent;
    // }));

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
