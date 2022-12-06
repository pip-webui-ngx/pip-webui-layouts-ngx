import { Component, OnInit } from '@angular/core';
import { PipMediaService } from 'pip-webui-layouts-ngx';

import { AppComponent } from '../app.component';

@Component({
  selector: 'pip-main-menu-layout-example',
  templateUrl: './main-menu-layout-example.component.html',
  styleUrls: ['./main-menu-layout-example.component.scss'],
})
export class MainMenuLayoutExampleComponent implements OnInit {
  private _prevIcon: string;

  public isSingle = false;
  public list: any[] = [];
  public selectedIndex = 0;
  public tiles: any[] = [];
  public itemIndex = 0;
  public navLinks: any[] = [{ label: 'Document' }, { label: 'Tiles' }];

  constructor(public media: PipMediaService, private parent: AppComponent) {}

  ngOnInit() {
    this.generateList();
    this.createTiles();
  }

  private generateList() {
    for (let i = 0; i < 50; i++) {
      this.list.push({ title: 'Item ' + i });
    }
  }

  private createTiles() {
    for (let i = 0; i < 6; i++) {
      this.tiles.push({ title: 'Tile number ' + i });
    }
  }

  public onLinkClick(index) {
    this.selectedIndex = index;
  }

  public onItemClick(index) {
    this.itemIndex = index;
    if (this.media.isMainActive('lt-md')) {
      this.isSingle = true;
      this._prevIcon = this.parent.showIcon;
      this.parent.showIcon = 'back';
      this.parent.onBackClick = () => {
        this.isSingle = false;
        this.parent.onBackClick = null;
        this.parent.showIcon = this._prevIcon;
      };
    }
  }

  public goBack() {
    this?.parent?.onBackClick();
  }
}
