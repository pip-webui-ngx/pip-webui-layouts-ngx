import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PipRootLayoutComponent } from './root-layout.component';

@NgModule({
  declarations: [
    PipRootLayoutComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule
  ],
  exports: [
    PipRootLayoutComponent
  ],
  providers: []
})
export class PipRootLayoutModule { }
