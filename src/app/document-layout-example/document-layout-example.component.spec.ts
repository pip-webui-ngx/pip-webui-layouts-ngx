import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentLayoutExampleComponent } from './document-layout-example.component';

describe('DocumentLayoutExampleComponent', () => {
  let component: DocumentLayoutExampleComponent;
  let fixture: ComponentFixture<DocumentLayoutExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentLayoutExampleComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentLayoutExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
