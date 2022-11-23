import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipMediaService, PipSidenavService, PipRightnavService } from 'pip-webui2-layouts';
import { PipThemesModule } from 'pip-webui2-themes';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CardLayoutExampleModule } from './card-layout-example/card-layout-example.module';
import { DocumentLayoutExampleModule } from './document-layout-example/document-layout-example.module';
import { ExamplesListModule } from './examples-list/examples-list.module';
import { FxLayoutExampleModule } from './fx-layout-example/fx-layout-example.module';
import { MainLayoutExampleModule } from './main-layout-example/main-layout-example.module';
import { MainMenuLayoutExampleModule } from './main-menu-layout-example/main-menu-layout-example.module';
import { ScrollableLayoutExampleModule } from './scrollable-layout-example/scrollable-layout-example.module';
import { TilesLayoutExampleModule } from './tiles-layout-example/tiles-layout-example.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FlexLayoutModule,
        MatButtonModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatSidenavModule,
        MatToolbarModule,
        TranslateModule.forRoot(),

        AppRoutingModule,
        CardLayoutExampleModule,
        DocumentLayoutExampleModule,
        ExamplesListModule,
        FxLayoutExampleModule,
        MainLayoutExampleModule,
        MainMenuLayoutExampleModule,
        ScrollableLayoutExampleModule,
        TilesLayoutExampleModule,

        PipThemesModule.forRoot()
      ],
      providers: [
        PipMediaService,
        PipSidenavService,
        PipRightnavService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
