import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { UserService } from '@services/user.service'
import { PostService } from '@services/post.service'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  asideBookmarks:Observable<boolean>;
  asideComplentary:Observable<boolean>;

  user: any;
  feed: any;

  constructor(public breakpointObserver: BreakpointObserver,
              private userService: UserService,
              private postService: PostService) {
    this.asideBookmarks = breakpointObserver.observe('(max-width: 1100px)')
      .pipe(map(result => !result.matches));
    this.asideComplentary = breakpointObserver.observe('(max-width: 900px)')
      .pipe(map(result => !result.matches));
  }

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
