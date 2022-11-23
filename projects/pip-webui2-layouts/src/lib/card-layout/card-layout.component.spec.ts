import { TestBed, inject, ComponentFixture } from '@angular/core/testing';

import { PipCardLayoutComponent } from './card-layout.component';

describe('a card-layout component', () => {
    let component: PipCardLayoutComponent;
    let fixture: ComponentFixture<PipCardLayoutComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                PipCardLayoutComponent
            ]
        });
        fixture = TestBed.createComponent(PipCardLayoutComponent);
        component = fixture.componentInstance;
    });

    // instantiation through framework injection
    // beforeEach(inject([PipCardLayoutComponent], (CardLayoutComponent) => {
    //     component = CardLayoutComponent;
    // }));

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
