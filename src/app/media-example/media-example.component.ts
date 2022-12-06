import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { PipMediaService } from 'pip-webui-layouts-ngx';

interface Tile {
  alias: string;
  cols: number;
  text: string;
}

@Component({
  selector: 'pip-media-example',
  templateUrl: './media-example.component.html',
  styleUrls: ['./media-example.component.scss'],
})
export class MediaExampleComponent {
  public tilesDocument: Tile[] = [
    { alias: 'xs', cols: 1, text: 'xs' },
    { alias: 'sm', cols: 1, text: 'sm' },
    { alias: 'md', cols: 1, text: 'md' },
    { alias: 'lg', cols: 1, text: 'lg' },
    { alias: 'xl', cols: 1, text: 'xl' },
    { alias: 'lt-sm', cols: 1, text: 'lt-sm' },
    { alias: 'gt-xs', cols: 4, text: 'gt-xs' },
    { alias: 'lt-md', cols: 2, text: 'lt-md' },
    { alias: 'gt-sm', cols: 3, text: 'gt-sm' },
    { alias: 'lt-lg', cols: 3, text: 'lt-lg' },
    { alias: 'gt-md', cols: 2, text: 'gt-md' },
    { alias: 'lt-xl', cols: 4, text: 'lt-xl' },
    { alias: 'gt-lg', cols: 1, text: 'gt-lg' },
  ];

  public tilesMain: Tile[] = [
    { alias: 'xs', cols: 1, text: 'xs' },
    { alias: 'sm', cols: 1, text: 'sm' },
    { alias: 'md', cols: 1, text: 'md' },
    { alias: 'lg', cols: 1, text: 'lg' },
    { alias: 'xl', cols: 1, text: 'xl' },
    { alias: 'lt-sm', cols: 1, text: 'lt-sm' },
    { alias: 'gt-xs', cols: 4, text: 'gt-xs' },
    { alias: 'lt-md', cols: 2, text: 'lt-md' },
    { alias: 'gt-sm', cols: 3, text: 'gt-sm' },
    { alias: 'lt-lg', cols: 3, text: 'lt-lg' },
    { alias: 'gt-md', cols: 2, text: 'gt-md' },
    { alias: 'lt-xl', cols: 4, text: 'lt-xl' },
    { alias: 'gt-lg', cols: 1, text: 'gt-lg' },
  ];

  constructor(public fxMedia: MediaObserver, public media: PipMediaService) {}
}
