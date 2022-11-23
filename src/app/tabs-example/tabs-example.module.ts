import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TabsExampleComponent } from './tabs-example.component';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabPageModule } from './tab-page/tab-page.module';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,

        TabsRoutingModule,
        TabPageModule
    ],
    declarations: [TabsExampleComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabsExampleModule { }
