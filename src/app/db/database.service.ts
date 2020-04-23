import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Option {
  constructor(public _id: string, public name: string){}
}

@Injectable()
export class DatabaseService {
  static API_KEY: string = '5ea21abe919b360ce59b7c83';
  static API_URL: string = 'https://options-8245.restdb.io/rest/';
  config = { withCredentials: true, headers: new HttpHeaders().append('Accept', 'application/json').append('x-apikey',DatabaseService.API_KEY)};

  constructor( private http: HttpClient) { }

  connect(): Observable<string> {
    return this.http.get<string>(DatabaseService.API_URL, this.config);
  }
  getOptions(): Observable<Option[]> {
    return this.http.get<Option[]>(DatabaseService.API_URL+'options', this.config);
  }

}