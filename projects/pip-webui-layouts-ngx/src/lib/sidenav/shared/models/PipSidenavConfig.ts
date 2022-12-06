import { InjectionToken } from '@angular/core';

import { PipSidenavView } from './PipSidenavView';

/**
 * Configuration of sidenav
 */
export class PipSidenavConfig {
  /**
   * Opened on startup
   */
  opened?: boolean;
  /**
   * Active by default
   */
  active?: boolean;
  /**
   * List of views
   */
  views?: PipSidenavView[];
}

export const PIP_SIDENAV_START_CONFIG = new InjectionToken<PipSidenavConfig>('PipWebUI2 sidenav start config');
export const PIP_SIDENAV_END_CONFIG = new InjectionToken<PipSidenavConfig>('PipWebUI2 sidenav start config');
