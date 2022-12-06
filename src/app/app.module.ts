import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PipAppbarModule,
  PipMediaModule,
  PipNavExpanderModule,
  PipRootLayoutModule,
  PipShadowModule,
  PipSidenavModule,
  PipSidenavPosition,
} from 'pip-webui-layouts-ngx';
import { mstThemes, PipThemesModule, pipWebUI2ThemesList } from 'pip-webui-themes-ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    PipThemesModule.forRoot({
      themes: [...pipWebUI2ThemesList, mstThemes['Elegant']],
    }),
    PipAppbarModule.forRoot(),
    PipMediaModule.forRoot(),
    PipShadowModule,
    PipNavExpanderModule,
    PipSidenavModule.withConfig({
      start: {
        views: [
          {
            name: 'tablet',
            alias: 'lt-md',
            position: PipSidenavPosition.Root,
            mode: 'side',
            collapsed: true,
            opened: true,
            active: false,
          },
          {
            name: 'mobile',
            alias: 'lt-sm',
            position: PipSidenavPosition.Root,
            mode: 'over',
          },
        ],
      },
      end: {
        views: [
          {
            name: 'default',
            position: PipSidenavPosition.Root,
            mode: 'side',
            width: 350,
          },
          {
            name: 'mobile',
            alias: 'lt-sm',
            position: PipSidenavPosition.Root,
            mode: 'over',
          },
        ],
      },
    }),
    PipRootLayoutModule,
    AppRoutingModule,
    TranslocoRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
