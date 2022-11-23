import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipMediaService, PipSidenavService } from 'pip-webui2-layouts';

import { CardLayoutExampleComponent } from './card-layout-example.component';

describe('CardLayoutExampleComponent', () => {
  let component: CardLayoutExampleComponent;
  let fixture: ComponentFixture<CardLayoutExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardLayoutExampleComponent],
      imports: [
        FlexLayoutModule
      ],
      providers: [
        PipMediaService,
        PipSidenavService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLayoutExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
