import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  @Input() show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
