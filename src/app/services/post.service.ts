import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL;
  feed = [
    {
      "id_user": "lucas",
      "name": "Lucas Ferreira Lima",
      "photo": "assets/skywalker.jpg",
      "data": new Date(1994,11,15,3,33,0),
      "comment": "I am your father.",
    },
    {
      "id_user": "yoda",
      "name": "Yoda",
      "photo": "assets/yoda.jpg",
      "data": new Date(1994,11,15,3,33,0),
      "comment": "Faça ou não faça. A tentativa não existe.",
    },
    {
      "id_user": "luke",
      "name": "Luke",
      "photo": "assets/luke.jpg",
      "data": new Date(1994,11,15,3,33,0),
      "comment": `Eu nunca treinarei outra geração de Jedi
Então se prepara gurizada que a força esteja com você.

Abraços Fé
      `,
    },
    {
      "id_user": "han",
      "name": "HanSolo",
      "photo": "assets/hansolo.jpg",
      "data": new Date(1994,11,15,3,33,0),
      "comment": "Nessas ruas perigosas, um jovem luta pela sobrevivência, mas anseia por voar entre as estrelas.",
    },
    {
      "id_user": "chew",
      "name": "Chewbacca",
      "photo": "assets/chewbacca.jpg",
      "data": new Date(1994,11,15,3,33,0),
      "comment": "RWGWGWARAHHHHWWRGGWRWRW.",
    }
  ]

  getListagem() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<[]>(`${this.apiURL}/list/users/posts`, httpOptions)
  }

  getListagemProfile(user_id: string) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<[]>(`${this.apiURL}/profile`, user_id, httpOptions)
  }

  setPost(post_content: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post(`${this.apiURL}/insert/user/post`, post_content, httpOptions)
  }

  deletePost(post: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post(`${this.apiURL}/delete/user/post`, { _id: post._id, iduser: post.iduser }, httpOptions)
  }

  setPostMock(text: string) {
    this.feed.unshift({
      "id_user": "lucas",
      "name": "Lucas Ferreira Lima",
      "photo": "assets/skywalker.jpg",
      "data": new Date(),
      "comment": text
    })
    localStorage.setItem("feed", JSON.stringify(this.feed))
  }

  // Mock Interface
  getListagemMock() {
    let feed_local = localStorage.getItem("feed")
    feed_local ? this.feed = JSON.parse(feed_local) : localStorage.setItem("feed", JSON.stringify(this.feed))
    return this.feed
  }
}
