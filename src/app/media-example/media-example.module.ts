import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslocoModule } from '@ngneat/transloco';
import { PipMediaModule, PipScrollableModule, PipShadowModule } from 'pip-webui-layouts-ngx';
import { MediaExampleComponent } from './media-example.component';
import { MediaRoutingModule } from './media-example.routing.module';

@NgModule({
  declarations: [MediaExampleComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatGridListModule,
    MatToolbarModule,
    TranslocoModule,
    PipMediaModule,
    PipShadowModule,
    PipScrollableModule,
    MediaRoutingModule,
  ],
})
export class MediaExampleModule {}
