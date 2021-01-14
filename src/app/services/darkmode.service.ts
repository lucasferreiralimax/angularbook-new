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
      this.setColors(["#fff", "#333", "#333", "#999", "#eee"])
      this.root.querySelector('body').classList.add('dark-mode')
    } else {
      this.setColors(["#1c1e21", "#fff", "#f0f2f5", "#dddfe2", "#737373"])
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
