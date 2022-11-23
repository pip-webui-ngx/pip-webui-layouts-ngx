import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PipMainLayoutComponent } from './main-layout.component';

@NgModule({
  declarations: [
    PipMainLayoutComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule
  ],
  exports: [
    PipMainLayoutComponent
  ],
  providers: [
    PipMainLayoutComponent
  ]
})
export class PipMainLayoutModule { }
