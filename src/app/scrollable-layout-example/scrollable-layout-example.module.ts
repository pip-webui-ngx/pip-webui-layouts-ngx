import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PipScrollableModule, PipShadowModule } from 'pip-webui-layouts-ngx';

import { ScrollableLayoutExampleComponent } from './scrollable-layout-example.component';
import { ScrollableLayoutRoutingModule } from './scrollable-layout.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    PipScrollableModule,
    PipShadowModule,
    ScrollableLayoutRoutingModule,
  ],
  declarations: [ScrollableLayoutExampleComponent],
})
export class ScrollableLayoutExampleModule {}
