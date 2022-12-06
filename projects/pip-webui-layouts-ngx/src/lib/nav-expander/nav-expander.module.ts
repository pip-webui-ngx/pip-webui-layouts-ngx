import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PipNavExpanderComponent } from './nav-expander.component';

@NgModule({
  declarations: [PipNavExpanderComponent],
  exports: [PipNavExpanderComponent],
  imports: [CommonModule, MatListModule, MatIconModule],
})
export class PipNavExpanderModule {}
