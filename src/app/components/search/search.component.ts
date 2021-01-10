import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchStatus: boolean = false;

  constructor(private _elementRef : ElementRef) { }

  ngOnInit(): void {
  }

  openSearch (status: boolean) {
    this.searchStatus = status
    if(this.searchStatus) {
      this._elementRef.nativeElement.querySelector('input').focus()
    }
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  handleOutsideClick(event: any) {
    if (!event.path.includes(this._elementRef.nativeElement)) this.openSearch(false)
  }

}
