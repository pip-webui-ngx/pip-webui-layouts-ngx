import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PipSidenavConfig, PIP_SIDENAV_END_CONFIG, PIP_SIDENAV_START_CONFIG } from './models/index';

@NgModule({
  imports: [CommonModule, MatSidenavModule],
})
export class PipSidenavModule {
  static withConfig(config: {
    start?: PipSidenavConfig;
    end?: PipSidenavConfig;
  }): ModuleWithProviders<PipSidenavModule> {
    return {
      ngModule: PipSidenavModule,
      providers: [
        {
          provide: PIP_SIDENAV_START_CONFIG,
          useValue: config.start,
        },
        {
          provide: PIP_SIDENAV_END_CONFIG,
          useValue: config.end,
        },
      ],
    };
  }
}
