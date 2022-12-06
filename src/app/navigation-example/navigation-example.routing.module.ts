import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationExampleComponent } from './navigation-example.component';

const testRoutes: Routes = [
  {
    path: '',
    component: NavigationExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(testRoutes)],
  exports: [RouterModule],
})
export class NavigationRoutingModule {}
