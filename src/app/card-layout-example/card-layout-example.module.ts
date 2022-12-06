import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslocoModule } from '@ngneat/transloco';
import { PipCardLayoutModule, PipMediaModule, PipShadowModule } from 'pip-webui-layouts-ngx';
import { CardLayoutExampleComponent } from './card-layout-example.component';
import { CardLayoutRoutingModule } from './card-layout.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    PipCardLayoutModule,
    PipMediaModule,
    PipShadowModule,
    CardLayoutRoutingModule,
  ],
  declarations: [CardLayoutExampleComponent],
})
export class CardLayoutExampleModule {}
