import { TestBed, inject, ComponentFixture } from '@angular/core/testing';

import { PipScrollableContentComponent } from './scrollable-content.component';

describe('a scrollable-element component', () => {
    let component: PipScrollableContentComponent;
    let fixture: ComponentFixture<PipScrollableContentComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                PipScrollableContentComponent
            ]
        });
        fixture = TestBed.createComponent(PipScrollableContentComponent);
        component = fixture.componentInstance;
    });

    // instantiation through framework injection
    // beforeEach(inject([PipScrollableContentComponent], (ScrollableContentComponent) => {
    //     component = ScrollableContentComponent;
    // }));

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
