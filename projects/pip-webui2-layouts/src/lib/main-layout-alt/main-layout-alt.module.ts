import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PipMainLayoutAltComponent } from './main-layout-alt.component';

@NgModule({
  declarations: [
    PipMainLayoutAltComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule
  ],
  exports: [
    PipMainLayoutAltComponent
  ],
  providers: [
    PipMainLayoutAltComponent
  ]
})
export class PipMainLayoutAltModule { }
