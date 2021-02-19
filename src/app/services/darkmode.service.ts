import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  constructor() { }

  root = (<any>window).document.documentElement;
  dark = false

  getDarkMode () {
    return this.dark
  }

  darkMode (type: boolean) {
    this.dark = type
    localStorage.setItem("dark", JSON.stringify(type))
    if(type) {
      this.setColors(["#fff", "51, 51, 51", "51, 51, 51", "#999", "#eee"])
      this.root.style.setProperty("--filter-icon", "invert(1)")
      this.root.querySelector('body').classList.add('dark-mode')
    } else {
      this.setColors(["#1c1e21", "255, 255, 255", "240, 242, 245", "#dddfe2", "#737373"])
      this.root.style.setProperty("--filter-icon", "invert(59%) sepia(11%) saturate(200%) saturate(135%) hue-rotate(176deg) brightness(96%) contrast(94%)")
      this.root.querySelector('body').classList.remove('dark-mode')
    }
  }

  setColors (colors: string[]) {
    this.root.style.setProperty("--main-color-1", colors[0])
    this.root.style.setProperty("--main-color-2", colors[1])
    this.root.style.setProperty("--main-color-3", colors[2])
    this.root.style.setProperty("--main-color-4", colors[3])
    this.root.style.setProperty("--main-color-5", colors[4])
  }
}
