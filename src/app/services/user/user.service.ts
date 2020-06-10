import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // tslint:disable-next-line: ban-types
  [x: string]: Object;

  baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }


  async register(body) {
    const url = this.baseUrl + '/user/register';
    try {
        console.log(url, body);
        const data = await this.http.post(url, body).toPromise();
        // localStorage.setItem('userData', JSON.stringify(data));
        return Promise.resolve('Todo ok!');
    } catch (err) {
        return Promise.reject('todo mal!');
    }
}

async login(body) {
    const url = this.baseUrl + '/user/login';
    try {
        console.log(url);
        console.log(body);
        const data = await this.http.post(url, body).toPromise();
        localStorage.setItem('user-token', JSON.stringify(data));
        return Promise.resolve('hola');
    } catch (err) {
        console.log(err);
        return Promise.reject(err.error.message);
    }
}

getToken(){
    const token = JSON.parse(localStorage.getItem('token'));
    // tslint:disable-next-line: triple-equals
    if (token != undefined){
        this.token = token;
    }else{
        this.token = null;
        }
    return this.token;
    }

getIdentity(){
    const identity = JSON.parse(localStorage.getItem('user-token'));
    if (identity != null){
        this.identity = identity;
    }else{
        this.identity = null;
    }
    return this.identity;
    }

/* Método para sacar LISTA de USUARIOS
getUsers(page = null): Observable<any>{
    const  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());

    return this._http.get(this.url+'users/'+page, {headers:headers});
}


getUserById(id){
  return this.http.get<any>(environment.API_URL + `/users/userById/${id}`);
}
/* Método para sacar un USUARIO
getUser(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());

    return this._http.get(this.url+'user/'+id, {headers:headers});
}*/
}
