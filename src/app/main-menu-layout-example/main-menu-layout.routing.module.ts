import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainMenuLayoutExampleComponent } from './main-menu-layout-example.component';

const layoutRoutes: Routes = [
  {
    path: '',
    component: MainMenuLayoutExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule],
})
export class MainMenuLayoutRoutingModule {}
