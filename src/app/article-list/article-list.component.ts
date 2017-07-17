import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {
  @Input() articlesList: any;
  //@Output() onRoute: EventEmitter<any> = new EventEmitter();
  constructor(private _DomSanitizationService: DomSanitizer, private router:Router) { }

  ngOnInit() {
    //console.log(this.articlesList);
  }

  routeTo(e,index){
    //console.log(e, index, this.articlesList[index].articleId);
    this.router.navigate(['/stories',this.articlesList[index].articleId])
  }

}
