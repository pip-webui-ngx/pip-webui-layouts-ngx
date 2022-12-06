import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { PipMediaService, PipSidenavService } from 'pip-webui-layouts-ngx';
import { PipThemesService, Theme } from 'pip-webui-themes-ngx';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

class NavigationListItem {
  public name: string;
  public route: string;
  public icon: string;
}

class NavigationListGroup {
  public name: string;
  public items: NavigationListItem[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private _showIcon$: BehaviorSubject<string> = new BehaviorSubject<string>('menu');

  ctx$: Observable<{
    currentTheme: Theme;
    themes: Theme[];
  }>;
  languages = ['en', 'ru'];
  language: string;
  onBackClick: Function = null;
  listIndex = 0;

  public groups: NavigationListGroup[] = [
    {
      name: 'MENU.BEHAVIORS.TITLE',
      items: [
        { name: 'MENU.BEHAVIORS.MEDIA', route: 'media', icon: 'visibility' },
        { name: 'MENU.BEHAVIORS.FX', route: 'fx', icon: 'feedback' },
        { name: 'MENU.BEHAVIORS.NAVIGATION', route: 'navigation', icon: 'navigation' },
        { name: 'MENU.BEHAVIORS.TABS', route: 'tabs', icon: 'view_week' },
      ],
    },
    {
      name: 'MENU.LAYOUTS.TITLE',
      items: [
        { name: 'MENU.LAYOUTS.CARD', route: 'card', icon: 'view_array' },
        { name: 'MENU.LAYOUTS.DOCUMENT', route: 'document', icon: 'description' },
        { name: 'MENU.LAYOUTS.MENU', route: 'menu', icon: 'view_quilt' },
        { name: 'MENU.LAYOUTS.SCROLLABLE', route: 'scrollable', icon: 'view_day' },
        { name: 'MENU.LAYOUTS.TILES', route: 'tiles', icon: 'view_module' },
      ],
    },
  ];

  public constructor(
    private cd: ChangeDetectorRef,
    private pipThemes: PipThemesService,
    private router: Router,
    public media: PipMediaService,
    public sidenav: PipSidenavService,
    public translate: TranslocoService,
  ) {
    this.pipThemes.selectTheme(this.pipThemes.config.defaultThemeName);
    this.ctx$ = combineLatest({
      currentTheme: this.pipThemes.currentTheme$,
      themes: this.pipThemes.themes$.pipe(map((themes) => Array.from(themes.values()))),
    });
  }

  changeTheme(theme: Theme) {
    this.pipThemes.selectTheme(theme.name);
  }

  public get showIcon$(): Observable<string> {
    return this._showIcon$;
  }

  public onListItemIndexChanged(index: number) {
    this.listIndex = index;
    this.sidenav.start.close();
  }

  public set showIcon(icon: string) {
    this._showIcon$.next(icon);
  }

  public get showIcon(): string {
    return this._showIcon$.getValue();
  }

  public onMenuClick() {
    this.sidenav.start.toggle();
  }

  public onInfoClick() {
    const v = this._showIcon$.value;
    this.sidenav.end.toggle();
    this._showIcon$.next(v);
  }
}
