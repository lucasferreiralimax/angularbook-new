import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {

  @Input() show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
