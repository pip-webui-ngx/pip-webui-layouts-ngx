import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PipSidenavService } from './shared/sidenav.service';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ]
})
export class PipSidenavModule {
  static forRoot(): ModuleWithProviders<PipSidenavModule> {
    return {
      ngModule: PipSidenavModule,
      providers: [
        PipSidenavService
      ]
    };
  }
}
