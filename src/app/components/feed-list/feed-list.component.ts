import { Component, OnInit } from '@angular/core';

import { UserService } from '@services/user.service'
import { PostService } from '@services/post.service'

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {

  user: any;
  feed: any;

  constructor(private userService: UserService,
              private postService: PostService) { }

  ngOnInit(): void {
    if(this.userService.getUser()) {
      this.user = this.userService.getUser()
    } else {
      this.user = this.userService.getUserMockado()
    }
    this.getFeed()
  }

  getFeed(): void {
    this.postService.getListagem().subscribe(
      res => this.feed = res,
      error => {
        console.log(error)
        this.feed = this.postService.getListagemMock()
      }
    );
  }

}
