import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ArticleServiceService {

  constructor(private _http:Http) { }

  writeArticles(d){
    return this._http.put('https://punyakshetraalu-e040d.firebaseio.com/articles.json', d);
  }



}
