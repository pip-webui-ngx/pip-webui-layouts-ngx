import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScrollableLayoutExampleComponent } from './scrollable-layout-example.component';

const layoutRoutes: Routes = [
  {
    path: '',
    component: ScrollableLayoutExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule],
})
export class ScrollableLayoutRoutingModule {}
