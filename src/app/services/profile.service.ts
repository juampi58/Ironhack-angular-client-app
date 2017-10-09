import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './../models/user';

@Injectable()
export class ProfileService {

  constructor(private http: Http) { }

  get(id:string) {
    return this.http.get(`http://localhost:3000/users/${id}`)
      .map((res) => new User(res.json()));
  }
  edit(id:string,info:Object){
    return this.http.post(`http://localhost:3000/users/${id}`, info)
    .map((res) => new User(res.json()));
  }

}
