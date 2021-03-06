import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }

  setCookie(cname: string, cvalue: string, extime: number) {
    let now = new Date();
    let time = now.getTime();
        time += extime; // 3600 * 1000
        now.setTime(time);
    let expires = "expires=" + now.toUTCString();
    document.cookie = cname + "=" + cvalue +  ';' + expires + '; path=/';
  }

  getCookie(cname: string) {
    let name = cname + "=";
    let ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  checkCookie(name: string) {
    return this.getCookie(name) ? true : false
  }

  deleteCookie(name: string) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}
