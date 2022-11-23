import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-layout-example',
  templateUrl: './document-layout-example.component.html',
  styleUrls: ['./document-layout-example.component.scss']
})
export class DocumentLayoutExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onItemClick(e) {
    console.log(e);
    const cl = e.srcElement.classList;
    cl.contains('opened') ? cl.remove('opened') : cl.add('opened');
  }

}
