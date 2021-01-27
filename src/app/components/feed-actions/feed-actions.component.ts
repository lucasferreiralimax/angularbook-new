import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-actions',
  templateUrl: './feed-actions.component.html',
  styleUrls: ['./feed-actions.component.scss']
})
export class FeedActionsComponent implements OnInit {

  like: any;

  constructor() { }

  ngOnInit(): void {
  }

  likeAction(): void {
    this.like = !this.like
  }

}
