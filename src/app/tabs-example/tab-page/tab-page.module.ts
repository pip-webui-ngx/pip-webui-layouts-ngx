import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoModule } from '@ngneat/transloco';
import { TabsPageComponent } from './tab-page.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, TranslocoModule],
  declarations: [TabsPageComponent],
  exports: [TabsPageComponent],
})
export class TabPageModule {}
