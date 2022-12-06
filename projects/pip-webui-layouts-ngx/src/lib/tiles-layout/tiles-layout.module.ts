import { NgModule } from '@angular/core';

import { PipTilesLayoutComponent } from './tiles-layout.component';
import { PipMediaModule } from '../media/media.module';

@NgModule({
  imports: [PipMediaModule],
  declarations: [PipTilesLayoutComponent],
  exports: [PipTilesLayoutComponent],
})
export class PipTilesLayoutModule {}
