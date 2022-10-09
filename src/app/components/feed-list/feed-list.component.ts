import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {

  @Input() user: any;
  @Input() feed: any;
  @Output() updateFeed = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  getFeed() {
    this.updateFeed.next(true);
  }
}
