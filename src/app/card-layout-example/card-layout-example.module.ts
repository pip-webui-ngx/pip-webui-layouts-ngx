import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PipCardLayoutModule, PipMediaModule, PipShadowModule } from 'pip-webui2-layouts';

import { CardLayoutExampleComponent } from './card-layout-example.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    MatToolbarModule, MatSlideToggleModule, MatCardModule, MatButtonModule, MatInputModule,
    PipCardLayoutModule, PipMediaModule, PipShadowModule
  ],
  declarations: [CardLayoutExampleComponent]
})
export class CardLayoutExampleModule { }
