import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { PipAppbarComponent } from './appbar.component';
import { PipAppbarService } from './shared/appbar.service';

@NgModule({
    declarations: [
        PipAppbarComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTabsModule,
        MatToolbarModule,
        RouterModule,
        TranslateModule
    ],
    exports: [
        PipAppbarComponent
    ],
    providers: [],
})
export class PipAppbarModule {
    static forRoot(): ModuleWithProviders<PipAppbarModule> {
        return {
            ngModule: PipAppbarModule,
            providers: [
                PipAppbarService
            ]
        };
    }
}
