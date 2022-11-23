import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsExampleComponent } from './tabs-example.component';
import { TabsPageComponent } from './tab-page/tab-page.component';

const tabsRoutes: Routes = [
    {
        path: '', component: TabsExampleComponent, children: [
            {
                path: 'glue/:id', component: TabsPageComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(tabsRoutes)
    ],
    exports: [RouterModule]
})
export class TabsRoutingModule { }
