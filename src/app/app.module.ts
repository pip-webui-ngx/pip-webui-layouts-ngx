import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import {
  PipAppbarModule,
  PipMainLayoutAltModule,
  PipMediaModule,
  PipShadowModule,
  PipSidenavExpanderModule,
  PipSidenavModule,
  PipRightnavModule,
  PipRootLayoutModule
} from 'pip-webui2-layouts';
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    TranslateModule.forRoot(),

    PipThemesModule.forRoot(),
    PipAppbarModule.forRoot(),
    PipMainLayoutAltModule,
    PipMediaModule.forRoot(),
    PipShadowModule,
    PipSidenavExpanderModule,
    PipSidenavModule.forRoot(),
    PipRightnavModule.forRoot(),
    PipRootLayoutModule,

    AppRoutingModule,
    CardLayoutExampleModule,
    DocumentLayoutExampleModule,
    ExamplesListModule,
    FxLayoutExampleModule,
    MainMenuLayoutExampleModule,
    MainLayoutExampleModule,
    ScrollableLayoutExampleModule,
    TilesLayoutExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
