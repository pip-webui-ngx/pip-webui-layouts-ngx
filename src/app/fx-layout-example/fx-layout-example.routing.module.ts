import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FxLayoutExampleComponent } from './fx-layout-example.component';

const testRoutes: Routes = [
  {
    path: '',
    component: FxLayoutExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(testRoutes)],
  exports: [RouterModule],
})
export class FxLayoutExampleRoutingModule {}
