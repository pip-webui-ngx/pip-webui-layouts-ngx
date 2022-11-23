import { TestBed, inject, ComponentFixture } from '@angular/core/testing';

import { PipMenuLayoutComponent } from './menu-layout.component';

describe('a menu-layout component', () => {
    let component: PipMenuLayoutComponent;
    let fixture: ComponentFixture<PipMenuLayoutComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                PipMenuLayoutComponent
            ]
        });
        fixture = TestBed.createComponent(PipMenuLayoutComponent);
        component = fixture.componentInstance;
    });

    // instantiation through framework injection
    // beforeEach(inject([PipMenuLayoutComponent], (MenuLayoutComponent) => {
    //     component = MenuLayoutComponent;
    // }));

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
