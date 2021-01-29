import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-feed-options',
  templateUrl: './feed-options.component.html',
  styleUrls: ['./feed-options.component.scss']
})
export class FeedOptionsComponent implements OnInit {

  show: boolean = false;

  constructor(private _elementRef : ElementRef) { }

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

}
