import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './../models/user';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  signup(newUser){
    return this.http.post(`http://localhost:3000/signup`, newUser)
    .map((res) => new User(res.json()));
  }

  logIn(user){
    return this.http.post(`http://localhost:3000/login`, user)
    .map((res) => new User(res.json()));
  }

}
