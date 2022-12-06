import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MediaExampleComponent } from './media-example.component';

const testRoutes: Routes = [
  {
    path: '',
    component: MediaExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(testRoutes)],
  exports: [RouterModule],
})
export class MediaRoutingModule {}
