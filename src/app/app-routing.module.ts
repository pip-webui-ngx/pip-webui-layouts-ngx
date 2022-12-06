import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'media',
    loadChildren: () => import('./media-example/media-example.module').then((m) => m.MediaExampleModule),
  },
  {
    path: 'fx',
    loadChildren: () => import('./fx-layout-example/fx-layout-example.module').then((m) => m.FxLayoutExampleModule),
  },
  {
    path: 'card',
    loadChildren: () =>
      import('./card-layout-example/card-layout-example.module').then((m) => m.CardLayoutExampleModule),
  },
  {
    path: 'document',
    loadChildren: () =>
      import('./document-layout-example/document-layout-example.module').then((m) => m.DocumentLayoutExampleModule),
  },
  {
    path: 'tiles',
    loadChildren: () =>
      import('./tiles-layout-example/tiles-layout-example.module').then((m) => m.TilesLayoutExampleModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./main-menu-layout-example/main-menu-layout-example.module').then((m) => m.MainMenuLayoutExampleModule),
  },
  {
    path: 'scrollable',
    loadChildren: () =>
      import('./scrollable-layout-example/scrollable-layout-example.module').then(
        (m) => m.ScrollableLayoutExampleModule,
      ),
  },
  { path: 'tabs', loadChildren: () => import('./tabs-example/tabs-example.module').then((m) => m.TabsExampleModule) },
  {
    path: 'navigation',
    loadChildren: () => import('./navigation-example/navigation-example.module').then((m) => m.NavigationExampleModule),
  },
  { path: '**', redirectTo: 'navigation' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
