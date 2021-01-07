import { Component, OnInit, Input } from '@angular/core';

import { NotificationService } from '@services/notification.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {

  @Input() show: boolean = false;
  toasts: any;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.toasts = this.notificationService.notificationAll()
  }

  close(id: number) {
    this.toasts.splice(id, 1)
  }

}
