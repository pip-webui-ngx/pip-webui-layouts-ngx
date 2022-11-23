import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { PipSidenavExpanderComponent } from './sidenav-expander.component';

@NgModule({
  declarations: [
    PipSidenavExpanderComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    PipSidenavExpanderComponent
  ],
  providers: [],
})
export class PipSidenavExpanderModule { }
