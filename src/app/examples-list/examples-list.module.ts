import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { ExamplesListComponent } from './examples-list.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  declarations: [ExamplesListComponent],
  exports: [ExamplesListComponent]
})
export class ExamplesListModule { }
