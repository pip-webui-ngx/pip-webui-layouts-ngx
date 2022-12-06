import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PipTilesLayoutModule, PipShadowModule } from 'pip-webui-layouts-ngx';

import { TilesLayoutExampleComponent } from './tiles-layout-example.component';
import { TilesLayoutRoutingModule } from './tiles-layout.routing.module';

@NgModule({
  imports: [CommonModule, MatToolbarModule, PipTilesLayoutModule, PipShadowModule, TilesLayoutRoutingModule],
  declarations: [TilesLayoutExampleComponent],
})
export class TilesLayoutExampleModule {}
