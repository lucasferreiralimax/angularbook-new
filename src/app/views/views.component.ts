import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
