import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardLayoutExampleComponent } from './card-layout-example.component';

const layoutRoutes: Routes = [
  {
    path: '',
    component: CardLayoutExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule],
})
export class CardLayoutRoutingModule {}
