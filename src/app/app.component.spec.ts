import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { PipMediaService, PipSidenavService } from 'pip-webui-layouts-ngx';
import { mstThemes, PipThemesModule, pipWebUI2ThemesList } from 'pip-webui-themes-ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLayoutExampleModule } from './card-layout-example/card-layout-example.module';
import { DocumentLayoutExampleModule } from './document-layout-example/document-layout-example.module';
import { FxLayoutExampleModule } from './fx-layout-example/fx-layout-example.module';
import { MainMenuLayoutExampleModule } from './main-menu-layout-example/main-menu-layout-example.module';
import { ScrollableLayoutExampleModule } from './scrollable-layout-example/scrollable-layout-example.module';
import { TilesLayoutExampleModule } from './tiles-layout-example/tiles-layout-example.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        FlexLayoutModule,
        MatButtonModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatSidenavModule,
        MatToolbarModule,
        TranslocoTestingModule,

        AppRoutingModule,
        CardLayoutExampleModule,
        DocumentLayoutExampleModule,
        FxLayoutExampleModule,
        MainMenuLayoutExampleModule,
        ScrollableLayoutExampleModule,
        TilesLayoutExampleModule,

        PipThemesModule.forRoot({
          themes: [...pipWebUI2ThemesList, mstThemes['Elegant']],
        }),
      ],
      providers: [PipMediaService, PipSidenavService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
