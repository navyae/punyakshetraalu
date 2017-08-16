import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ArticleServiceService {

  constructor(private _http:Http) { }

  writeArticles(){
    this._http.put('https://punyakshetraalu-e040d.firebaseio.com/articles.json', this.getArticleData());
  }

  getArticleData(){
      return 'this is test';
  }

}
