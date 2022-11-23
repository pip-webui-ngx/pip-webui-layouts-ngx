import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PipTilesLayoutModule, PipShadowModule } from 'pip-webui2-layouts';

import { TilesLayoutExampleComponent } from './tiles-layout-example.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    PipTilesLayoutModule, PipShadowModule
  ],
  declarations: [TilesLayoutExampleComponent]
})
export class TilesLayoutExampleModule { }
