import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentLayoutExampleComponent } from './document-layout-example.component';

const layoutRoutes: Routes = [
  {
    path: '',
    component: DocumentLayoutExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule],
})
export class DocumentLayoutRoutingModule {}
