import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.scss']
})
export class DarkmodeComponent implements OnInit {

  constructor() { }

  root = (<any>window).document.documentElement;
  dark = false

  ngOnInit(): void {
    console.log(this.root)
  }

  darkMode (type: boolean) {
    console.log("Dark mode")
    console.log(type)
    if(!type) {
      this.root.style.setProperty("--main-color-1", "#fff")
      this.root.style.setProperty("--main-color-2", "#333")
      this.root.style.setProperty("--main-color-3", "#333")
      this.root.style.setProperty("--main-color-4", "#999")
      this.root.style.setProperty("--main-color-5", "#eee")
      this.dark = true
      // localStorage.setItem("dark", true)
    } else {
      this.root.style.setProperty("--main-color-1", "#1c1e21")
      this.root.style.setProperty("--main-color-2", "#fff")
      this.root.style.setProperty("--main-color-3", "#f0f2f5")
      this.root.style.setProperty("--main-color-4", "#dddfe2")
      this.root.style.setProperty("--main-color-5", "#737373")
      this.dark = false
      // localStorage.setItem("dark", false)
    }
  }

}
