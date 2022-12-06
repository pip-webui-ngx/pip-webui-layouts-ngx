import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PipAppbarService, PipAppbarTab } from 'pip-webui-layouts-ngx';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'pip-tab-page',
  templateUrl: './tab-page.html',
})
export class TabsPageComponent implements OnInit {
  public content$: Observable<string>;

  constructor(private appbar: PipAppbarService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.content$ = this.route.paramMap.pipe(
      map((p) => (p.get('id') === '1' ? 'PAGE.TAB.FIRST_CONTENT' : 'PAGE.TAB.SECOND_CONTENT')),
    );
  }

  public toggleColor() {
    this.appbar.bgColor = this.appbar.bgColor === 'primary' ? 'accent' : 'primary';
  }

  public toggleInkColor() {
    this.appbar.color = this.appbar.color === 'primary' ? 'accent' : 'primary';
  }
}
