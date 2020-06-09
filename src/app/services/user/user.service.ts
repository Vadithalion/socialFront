import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: Object;

  baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }


  async register(body) {
    const url = this.baseUrl + '/register';
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
    const url = this.baseUrl + '/login';
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
}
