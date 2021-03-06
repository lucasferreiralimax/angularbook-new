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
  messenger: boolean = false;
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
  @ViewChild('messengerRef', {read: ElementRef}) messengerRef: any;
  @ViewChild('notificationsRef', {read: ElementRef}) notificationsRef: any;

  @ViewChild('accountsButtonRef', {read: ElementRef}) accountsButtonRef: any;
  @ViewChild('createButtonRef', {read: ElementRef}) createButtonRef: any;
  @ViewChild('messengerButtonRef', {read: ElementRef}) messengerButtonRef: any;
  @ViewChild('notificationsButtonRef', {read: ElementRef}) notificationsButtonRef: any;

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  handleOutsideClick(event: any) {
    if (
        !event.path.includes(this.accountsRef.nativeElement) &&
        !event.path.includes(this.accountsButtonRef.nativeElement)
      ) { this.accounts = false }
    if (
        !event.path.includes(this.createRef.nativeElement) &&
        !event.path.includes(this.createButtonRef.nativeElement)
      ) { this.create = false }
    if (
        !event.path.includes(this.messengerRef.nativeElement) &&
        !event.path.includes(this.messengerButtonRef.nativeElement)
      ) { this.messenger = false }
    if (
        !event.path.includes(this.notificationsRef.nativeElement) &&
        !event.path.includes(this.notificationsButtonRef.nativeElement)
      ) { this.notifications = false }
  }

  ngOnInit(): void {
  }

  visibilityAccounts(event: boolean): void {
    this.accounts = event
  }

}
