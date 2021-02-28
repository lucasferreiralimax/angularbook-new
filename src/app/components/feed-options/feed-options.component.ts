import { Component, OnInit, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

import { PostService } from '@services/post.service'
import { NotificationService } from '@services/notification.service'

@Component({
  selector: 'app-feed-options',
  templateUrl: './feed-options.component.html',
  styleUrls: ['./feed-options.component.scss']
})
export class FeedOptionsComponent implements OnInit {

  show: boolean = false;
  @Input() post: any;
  @Output() updateFeed = new EventEmitter<any>();

  constructor(
    private _elementRef : ElementRef,
    private postService:PostService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  handleOutsideClick(event: any) {
    if (!event.path.includes(this._elementRef.nativeElement)) this.setOptions(false)
  }

  setOptions(value: boolean): void {
    this.show = value;
  }

  toggleOptions(): void {
    this.show = !this.show;
  }

  getFeed() {
    this.updateFeed.next();
  }

  delete(): void {
    this.postService.deletePost(this.post).subscribe(
      (res: any) => {
        this.notificationService.notification(res.notification.type, res.notification.title, res.notification.content);
        this.show = false;
        this.getFeed();
      },
      (err: any) => {
        this.notificationService.notification("error", err.error, err.message);
        console.log("error", err);
      }
    )
  }

}
