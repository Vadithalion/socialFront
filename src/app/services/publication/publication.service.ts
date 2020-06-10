import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
providedIn: 'root'
})
export class PublicationService {
public url: string;
baseUrl = 'http://localhost:8000/api';


constructor(public http: HttpClient) {
}

/* Método para AÑADIR una publicación nueva **/
newPublication(token, publication): Observable<any>{
  const params = JSON.stringify(publication);
  const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

  return this.http.post(this.baseUrl + 'publication', params, {headers});
}

/* Método para sacar LISTA de PUBLICACIONES **/
getPublications(token, page = 1): Observable<any>{
  const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);
  return this.http.get(this.baseUrl + 'publications/' + page, {headers});
}

  /* Método para BORRAR una PUBLICACIÓN **/
  deletePublication(token, id): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);
    return this.http.delete(this.baseUrl + 'publication/' + id, {headers});
  }

  /* Método para sacar LISTA de PUBLICACIONES de un usuario en concreto **/
  getPublicationsByUser(token, page = 1, userid): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);
    return this.http.get(this.baseUrl + 'publications-user/' + userid + '/' + page, {headers});
  }
}
