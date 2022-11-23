import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-tiles-layout-example',
  templateUrl: './tiles-layout-example.component.html',
  styleUrls: ['./tiles-layout-example.component.scss']
})
export class TilesLayoutExampleComponent implements OnInit {
  public tiles = [];

  constructor(
    public media: MediaObserver
  ) { }

  ngOnInit() {
    for (let i = 0; i < 6; i++) {
      this.tiles.push({ title: 'Tile number ' + i });
    }
  }

}
