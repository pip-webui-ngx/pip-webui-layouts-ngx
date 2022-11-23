import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PipRightnavService } from './shared/rightnav.service';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ]
})
export class PipRightnavModule {
  static forRoot(): ModuleWithProviders<PipRightnavModule> {
    return {
      ngModule: PipRightnavModule,
      providers: [
        PipRightnavService
      ]
    };
  }
}
