import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Layover } from './../models/layover';
import { User } from './../models/user';

@Injectable()
export class LayoverService {

  constructor(private http: Http) { }

  getList(id:string) {
    return this.http.get(`http://localhost:3000/users/${id}/layovers`)
      .map((res) => res.json().map((item) => new Layover(item)));
  }
  createNew(id:string,newItem){
    return this.http.post(`http://localhost:3000/users/${id}/layovers`, newItem)
    .map((res) => new Layover(res.json()));
  }
  deleteOne(userId:string,id:string){
    return this.http.delete(`http://localhost:3000/users/${userId}/layovers/${id}`)
    .map((res) => res.json().map((item) => new Layover(item)));
  }
  getMatches(id:string){
    return this.http.get(`http://localhost:3000/users/layovers/${id}`)
    .map((res) => res.json().map((item) => new Layover(item)));
  }
}
