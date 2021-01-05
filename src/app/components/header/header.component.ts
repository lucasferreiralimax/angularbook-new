import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
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
  desktopSize:Observable<boolean>;
  accounts: boolean = false;
  create: boolean = false;
  notifications: boolean = false;

  constructor(
    public router: Router,
    public breakpointObserver: BreakpointObserver
  ) {
    this.menuBookmarks = breakpointObserver.observe('(min-width: 1100px)')
      .pipe(map(result => !result.matches));
    this.desktopSize = breakpointObserver.observe('(max-width: 1100px)')
      .pipe(map(result => !result.matches));
  }

  @ViewChild('accountsRef', {read: ElementRef}) accountsRef: any;
  @ViewChild('createRef', {read: ElementRef}) createRef: any;
  @ViewChild('notificationsRef', {read: ElementRef}) notificationsRef: any;

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  handleOutsideClick(event: any) {
    if (!event.path.includes(this.accountsRef.nativeElement)) this.accounts = false
    if (!event.path.includes(this.createRef.nativeElement)) this.create = false
    if (!event.path.includes(this.notificationsRef.nativeElement)) this.notifications = false
  }

  ngOnInit(): void {
  }

}
