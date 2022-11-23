import { ChangeDetectorRef, Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { findIndex } from 'lodash';
import { PipThemesService, Theme } from 'pip-webui2-themes';
import { PipMediaService, PipSidenavService, PipRightnavService } from 'pip-webui2-layouts';
import { Observable, BehaviorSubject } from 'rxjs';

import { AppTranslations } from './app.strings';
import { ExmapleListItem } from './examples-list/shared/ExampleListItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  private _showIcon$: BehaviorSubject<string> = new BehaviorSubject<string>('menu');

  public themes: Theme[];
  public theme: Theme;
  public languages: string[] = [];
  public language = 'en';
  public onBackClick: Function = null;
  public listIndex = 0;

  public themesLocalNames: any = {
    'candy-theme': 'Candy',
    'unicorn-dark-theme': 'Unicorn Dark',
    'pip-blue-theme': 'Blue',
    'pip-grey-theme': 'Grey',
    'pip-pink-theme': 'Pink',
    'pip-green-theme': 'Green',
    'pip-navy-theme': 'Navy',
    'pip-amber-theme': 'Amber',
    'pip-orange-theme': 'Orange',
    'pip-dark-theme': 'Dark',
    'pip-black-theme': 'Black',
    'bootbarn-warm-theme': 'Bootbarn Warm',
    'bootbarn-cool-theme': 'Bootbarn Cool',
    'bootbarn-mono-theme': 'Bootbarn Mono',
    'mst-black-theme': 'MST Black',
    'mst-black-dark-theme': 'MST Black Dark',
    'mst-mono-theme': 'MST Mono',
    'mst-orange-theme': 'MST Orange',
    'mst-orange-dark-theme': 'MST Orange Dark',
    'mst-elegant-theme': 'MST Elegant'
  };

  public list: ExmapleListItem[] = [
    { name: 'Media query', id: 'media', route: 'media', icon: 'visibility' },
    { name: 'Document', id: 'document', route: 'document', icon: 'description' },
    { name: 'FX layout', id: 'fx', route: 'fx', icon: 'feedback' },
    { name: 'Tiles', id: 'tiles', route: 'tiles', icon: 'view_module' },
    { name: 'Menu', id: 'menu', route: 'menu', icon: 'view_quilt' },
    { name: 'Card', id: 'card', route: 'card', icon: 'view_array' },
    { name: 'Scrollable', id: 'scrollable', route: 'scrollable', icon: 'view_day' },
    { name: 'Tabs', id: 'tabs', route: 'tabs', icon: 'view_week' },
  ];

  public constructor(
    public media: PipMediaService,
    public sidenav: PipSidenavService,
    private rightnav: PipRightnavService,
    private translate: TranslateService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private themesService: PipThemesService
  ) {
    media.activate();
    this.themes = this.themesService.themes;
    this.selectTheme(this.themesService.themes[0]);

    translate.setDefaultLang(this.language);
    translate.use(this.language);
    this.languages = translate.getLangs();
    this.translate.setTranslation('en', AppTranslations.en, true);
    this.translate.setTranslation('ru', AppTranslations.ru, true);
  }

  public ngOnInit() {

    this.sidenav.small$.subscribe((small) => {
      this.cd.detectChanges();
    });
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      this.setListIndex();
    });
  }

  public selectTheme(theme) {
    this.theme = theme;
    this.themesService.selectedTheme = theme;
  }

  public changeLanguage(lang) {
    this.language = lang;
    this.translate.use(lang);
  }

  public get showIcon$(): Observable<string> {
    return this._showIcon$;
  }

  public onListItemIndexChanged(index: number) {
    this.listIndex = index;
    this.sidenav.closeFloatingNav();
  }

  public set showIcon(icon: string) {
    this._showIcon$.next(icon);
  }

  public get showIcon(): string {
    return this._showIcon$.getValue();
  }

  public onMenuClick() {
    this.sidenav.toggleNav();
  }

  public onInfoClick() {
    const v = this._showIcon$.value;
    this.rightnav.toggleRightnav();
    this._showIcon$.next(v);
  }

  public onThemeClick(theme) {
    this.selectTheme(theme);
  }

  private setListIndex() {
    const url = this.router.url;

    const index = findIndex(this.list, (item) => {
      return url.includes(item.route);
    });

    if (index > -1 && this.list.length > 0) { this.listIndex = index; }
  }
}
