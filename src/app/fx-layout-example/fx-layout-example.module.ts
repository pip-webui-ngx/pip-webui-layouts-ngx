import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipMediaModule } from 'pip-webui2-layouts';

import { FxLayoutExampleComponent } from './fx-layout-example.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    PipMediaModule
  ],
  declarations: [FxLayoutExampleComponent]
})
export class FxLayoutExampleModule { }
