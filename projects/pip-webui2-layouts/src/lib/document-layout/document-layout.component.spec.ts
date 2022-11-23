import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { PipDocumentLayoutComponent } from './document-layout.component';
import { PipMediaService } from '../media/shared/media.service';

describe('a document-layout component', () => {
    let component: PipDocumentLayoutComponent;
    let fixture: ComponentFixture<PipDocumentLayoutComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                PipDocumentLayoutComponent
            ],
            providers: [
                PipMediaService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(PipDocumentLayoutComponent);
        component = fixture.componentInstance;
    });

    // instantiation through framework injection
    // beforeEach(inject([PipDocumentLayoutComponent], (DocumentLayoutComponent) => {
    //     component = DocumentLayoutComponent;
    // }));

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
