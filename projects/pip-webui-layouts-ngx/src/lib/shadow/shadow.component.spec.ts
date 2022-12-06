import { TestBed, inject, ComponentFixture } from '@angular/core/testing';

import { PipShadowComponent } from './shadow.component';

describe('a appbar-shadow component', () => {
  let component: PipShadowComponent;
  let fixture: ComponentFixture<PipShadowComponent>;

  // register all needed dependencies
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipShadowComponent],
    });
    fixture = TestBed.createComponent(PipShadowComponent);
    component = fixture.componentInstance;
  });

  // instantiation through framework injection
  // beforeEach(inject([PipShadowComponent], (ShadowComponent) => {
  //     component = ShadowComponent;
  // }));

  it('should have an instance', () => {
    expect(component).toBeDefined();
  });
});
