import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PipScrollableModule, PipShadowModule } from 'pip-webui2-layouts';

import { ScrollableLayoutExampleComponent } from './scrollable-layout-example.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    PipScrollableModule, PipShadowModule
  ],
  declarations: [ScrollableLayoutExampleComponent]
})
export class ScrollableLayoutExampleModule { }
