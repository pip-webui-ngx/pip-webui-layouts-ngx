import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardLayoutExampleComponent } from './card-layout-example/card-layout-example.component';
import { DocumentLayoutExampleComponent } from './document-layout-example/document-layout-example.component';
import { FxLayoutExampleComponent } from './fx-layout-example/fx-layout-example.component';
import { MainLayoutExampleComponent } from './main-layout-example/main-layout-example.component';
import { MainMenuLayoutExampleComponent } from './main-menu-layout-example/main-menu-layout-example.component';
import { ScrollableLayoutExampleComponent } from './scrollable-layout-example/scrollable-layout-example.component';
import { TilesLayoutExampleComponent } from './tiles-layout-example/tiles-layout-example.component';

const appRoutes: Routes = [
    { path: 'media', component: MainLayoutExampleComponent },
    { path: 'document', component: DocumentLayoutExampleComponent },
    { path: 'fx', component: FxLayoutExampleComponent },
    { path: 'tiles', component: TilesLayoutExampleComponent },
    { path: 'menu', component: MainMenuLayoutExampleComponent },
    { path: 'card', component: CardLayoutExampleComponent },
    { path: 'scrollable', component: ScrollableLayoutExampleComponent },
    { path: 'tabs', loadChildren: () => import('./tabs-example/tabs-example.module').then(m => m.TabsExampleModule) },
    { path: '**', redirectTo: 'document' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
