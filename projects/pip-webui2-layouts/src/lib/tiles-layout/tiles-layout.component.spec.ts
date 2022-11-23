import { TestBed, inject, ComponentFixture } from '@angular/core/testing';

import { PipTilesLayoutComponent } from './tiles-layout.component';

describe('a tiles-layout component', () => {
    let component: PipTilesLayoutComponent;
    let fixture: ComponentFixture<PipTilesLayoutComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                PipTilesLayoutComponent
            ]
        });
        fixture = TestBed.createComponent(PipTilesLayoutComponent);
        component = fixture.componentInstance;
    });

    // instantiation through framework injection
    // beforeEach(inject([PipTilesLayoutComponent], (TilesLayoutComponent) => {
    //     component = TilesLayoutComponent;
    // }));

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
