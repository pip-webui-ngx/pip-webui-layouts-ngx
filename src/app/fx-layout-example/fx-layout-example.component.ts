import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { BREAKPOINTS, MediaObserver } from '@angular/flex-layout';
import { PipMediaService } from 'pip-webui-layouts-ngx';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pip-fx-layout-example',
  templateUrl: './fx-layout-example.component.html',
  styleUrls: ['./fx-layout-example.component.scss'],
})
export class FxLayoutExampleComponent implements OnInit, OnDestroy {
  private subs: Subscription = new Subscription();

  public windowSize: number = window && window.innerWidth;

  constructor(@Inject(BREAKPOINTS) public bps: any, public fxMedia: MediaObserver, public media: PipMediaService) {
    window.addEventListener('resize', () => {
      this.windowSize = window.innerWidth;
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
