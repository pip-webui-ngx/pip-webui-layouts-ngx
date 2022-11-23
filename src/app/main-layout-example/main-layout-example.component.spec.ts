import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipMediaService } from 'pip-webui2-layouts';

import { MainLayoutExampleComponent } from './main-layout-example.component';

describe('MainLayoutExampleComponent', () => {
  let component: MainLayoutExampleComponent;
  let fixture: ComponentFixture<MainLayoutExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainLayoutExampleComponent],
      imports: [
        FlexLayoutModule
      ],
      providers: [
        PipMediaService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
