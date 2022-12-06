import { Component } from '@angular/core';
import { PipSidenavService } from 'pip-webui-layouts-ngx';

@Component({
  selector: 'pip-card-layout-example',
  templateUrl: './card-layout-example.component.html',
  styleUrls: ['./card-layout-example.component.scss'],
})
export class CardLayoutExampleComponent {
  private sidenavActive = true;
  public isTransparent = false;
  public text = false;

  constructor(public sidenav: PipSidenavService) {}

  public onSidenavClick() {
    this.sidenavActive = !this.sidenavActive;
    this.sidenav.start.active = this.sidenavActive;
  }
}
