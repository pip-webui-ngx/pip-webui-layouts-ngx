import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PipMediaService } from '../media/shared/media.service';
import { PipAppbarTab } from './appbar.tab';
import { PipAppbarService } from './shared/appbar.service';

@Component({
  selector: 'pip-appbar',
  templateUrl: 'appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class PipAppbarComponent implements OnInit {
  constructor(private router: Router, public appbar: PipAppbarService, public media: PipMediaService) {}

  ngOnInit() {}

  isActive(url: string[]): boolean {
    return this.router.isActive(this.router.createUrlTree(url), {
      paths: 'exact',
      fragment: 'ignored',
      queryParams: 'subset',
      matrixParams: 'subset',
    });
  }

  getTabName(link: PipAppbarTab) {
    return link ? (typeof link.name === 'function' ? link.name() : link.name) : '';
  }

  navigate(link: PipAppbarTab): Promise<boolean> {
    return this.router.navigate(link.route.path);
  }
}
