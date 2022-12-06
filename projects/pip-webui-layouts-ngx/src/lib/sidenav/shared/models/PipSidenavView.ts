import { PipSidenavPosition } from './PipSidenavPosition';
import { MatDrawerMode } from '@angular/material/sidenav';

export class PipSidenavView {
  constructor(
    /** Name of view */
    public name: string,
    /** Position where view will be placed */
    public position: PipSidenavPosition,
    /** Alias to activate view */
    public alias?: string | string[],
    /** Mode of sidenav  */
    public mode?: MatDrawerMode,
    /** View can be collapsed */
    public collapseable?: boolean,
    /** View is collapsed by default */
    public collapsed?: boolean,
    /** View is opened by default */
    public opened?: boolean,
    /** View is active by default @default true */
    public active?: boolean,
    /** View is fixed in viewport */
    public fixedInViewport?: boolean,
    /** Top gap for fixed in viewport view */
    public fixedTopGap?: number,
    /** Bottom gap for fixed in viewport view */
    public fixedBottomGap?: number,
    /** View width @default 200 */
    public width?: number,
    /** View collapsed width @default 64 */
    public widthCollapsed?: number,
  ) {}
}
