import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.less']
})
export class ArticlePageComponent implements OnInit {
  getParams;
  articleId;
  constructor(private routeparams: ActivatedRoute) { }

  ngOnInit() {
    this.getParams = this.routeparams.params.subscribe(
      (param:any) =>{
      this.articleId = param['id'];
    }
    )
    //console.log(this.articleId);
  }

}
