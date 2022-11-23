import { Component, OnInit } from '@angular/core';
import { PipMediaService } from 'pip-webui2-layouts';

@Component({
  selector: 'app-main-layout-example',
  templateUrl: './main-layout-example.component.html',
  styleUrls: ['./main-layout-example.component.scss']
})
export class MainLayoutExampleComponent implements OnInit {

  constructor(
    public media: PipMediaService
  ) { }

  ngOnInit() {
  }

}
