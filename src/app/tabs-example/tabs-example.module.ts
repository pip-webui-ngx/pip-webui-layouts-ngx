import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TabPageModule } from './tab-page/tab-page.module';
import { TabsExampleComponent } from './tabs-example.component';
import { TabsRoutingModule } from './tabs-routing.module';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, TabsRoutingModule, TabPageModule],
  declarations: [TabsExampleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsExampleModule {}
