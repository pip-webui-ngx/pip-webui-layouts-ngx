import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { PipAppbarComponent } from './appbar.component';
import { PipAppbarService } from './shared/appbar.service';

@NgModule({
  declarations: [PipAppbarComponent],
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatTabsModule, MatToolbarModule, RouterModule],
  exports: [PipAppbarComponent],
  providers: [],
})
export class PipAppbarModule {
  static forRoot(): ModuleWithProviders<PipAppbarModule> {
    return {
      ngModule: PipAppbarModule,
      providers: [PipAppbarService],
    };
  }
}
