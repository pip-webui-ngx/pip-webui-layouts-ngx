import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TilesLayoutExampleComponent } from './tiles-layout-example.component';

const layoutRoutes: Routes = [
  {
    path: '',
    component: TilesLayoutExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule],
})
export class TilesLayoutRoutingModule {}
