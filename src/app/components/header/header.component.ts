import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuBookmarks:Observable<boolean>;
  menuBookmarksActive: boolean = false;
  accounts: boolean = false;
  create: boolean = false;

  constructor(
    public router: Router,
    public breakpointObserver: BreakpointObserver
  ) {
    this.menuBookmarks = breakpointObserver.observe('(min-width: 1100px)')
      .pipe(map(result => !result.matches));
  }

  ngOnInit(): void {
  }

}
