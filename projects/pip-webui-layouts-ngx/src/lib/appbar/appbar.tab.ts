import { NavigationExtras } from '@angular/router';

export class PipAppbarTab {
  /**
   * Name or name resolver
   */
  name: string | (() => string);
  /**
   * Route for @angular/router
   */
  route: {
    /**
     * Route path
     */
    path: string[];
    /**
     * Route navigation extras
     */
    extras?: NavigationExtras;
  };
  /**
   * Default tab flag
   */
  isDefault?: boolean;
}
