import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipMediaService } from 'pip-webui2-layouts';

import { FxLayoutExampleComponent } from './fx-layout-example.component';

describe('FxLayoutExampleComponent', () => {
  let component: FxLayoutExampleComponent;
  let fixture: ComponentFixture<FxLayoutExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FxLayoutExampleComponent],
      imports: [
        FlexLayoutModule
      ],
      providers: [
        PipMediaService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxLayoutExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
