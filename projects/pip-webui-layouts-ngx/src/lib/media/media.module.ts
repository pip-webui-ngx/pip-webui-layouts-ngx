import { ModuleWithProviders, NgModule } from '@angular/core';
import { BREAKPOINT } from '@angular/flex-layout';
import { PipShowHideDirective } from './media.directives';
import { PipResizeDirective } from './resize.directive';
import { PIP_BREAKPOINTS } from './shared/breakpoints';
import { PipMediaService } from './shared/media.service';

const PipBreakPointsProvider = {
  provide: BREAKPOINT,
  useValue: [...PIP_BREAKPOINTS],
};

@NgModule({
  declarations: [PipShowHideDirective, PipResizeDirective],
  exports: [PipShowHideDirective, PipResizeDirective],
})
export class PipMediaModule {
  static forRoot(): ModuleWithProviders<PipMediaModule> {
    return {
      ngModule: PipMediaModule,
      providers: [PipMediaService, PipBreakPointsProvider],
    };
  }
}
