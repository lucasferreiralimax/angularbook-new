import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  asideBookmarks:Observable<boolean>;
  asideComplentary:Observable<boolean>;

  constructor(public breakpointObserver: BreakpointObserver) {
    this.asideBookmarks = breakpointObserver.observe('(max-width: 1100px)')
      .pipe(map(result => !result.matches));
    this.asideComplentary = breakpointObserver.observe('(max-width: 900px)')
      .pipe(map(result => !result.matches));
  }

  ngOnInit(): void {
  }

}
