import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser() {
    let user = localStorage.getItem("user")
    return user ? JSON.parse(user) : user
  }

  getUserMockado() {
    return {
      "id_user": "lucas",
      "name": "Lucas Ferreira Lima",
      "photo": "assets/skywalker.jpg",
      "background": "assets/cover.jpg",
      "bio": "Fé",
      "location": "Pombal, Paraíba, Brasil",
      "relationship": "Solteiro",
      "since": "Maio de 2012",
      "site": "criar-curriculo.web.app"
    }
  }
}
