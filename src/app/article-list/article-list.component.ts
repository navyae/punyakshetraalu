import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {
  @Input() articlesList: any
  constructor(private _DomSanitizationService: DomSanitizer) { }

  ngOnInit() {
    console.log(this.articlesList);
  }

}
