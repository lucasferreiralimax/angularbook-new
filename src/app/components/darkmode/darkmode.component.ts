import { Component, OnInit } from '@angular/core';

import { DarkmodeService } from '@services/darkmode.service'

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.scss']
})
export class DarkmodeComponent implements OnInit {

  constructor(private darkmodeService: DarkmodeService) { }

  dark = false

  ngOnInit(): void {
    this.dark = this.darkmodeService.getDarkMode()
  }

  darkMode (type: boolean) {
    this.darkmodeService.darkMode(!type)
    this.dark = this.darkmodeService.getDarkMode()
  }

}
