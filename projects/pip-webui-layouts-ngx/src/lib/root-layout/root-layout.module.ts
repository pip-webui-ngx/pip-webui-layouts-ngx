import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PipRootLayoutComponent } from './root-layout.component';
import { PipMediaModule } from '../media/media.module';

@NgModule({
  declarations: [PipRootLayoutComponent],
  exports: [PipRootLayoutComponent],
  imports: [CommonModule, FlexLayoutModule, MatSidenavModule, PipMediaModule],
})
export class PipRootLayoutModule {}
