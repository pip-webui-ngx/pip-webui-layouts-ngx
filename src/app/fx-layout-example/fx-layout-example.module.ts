import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { PipMediaModule } from 'pip-webui-layouts-ngx';
import { FxLayoutExampleComponent } from './fx-layout-example.component';
import { FxLayoutExampleRoutingModule } from './fx-layout-example.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    PipMediaModule,
    TranslocoModule,
    FxLayoutExampleRoutingModule,
  ],
  declarations: [FxLayoutExampleComponent],
})
export class FxLayoutExampleModule {}
