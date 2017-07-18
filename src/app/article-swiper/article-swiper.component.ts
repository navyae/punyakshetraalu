import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-swiper',
  templateUrl: './article-swiper.component.html',
  styleUrls: ['./article-swiper.component.less']
})
export class ArticleSwiperComponent implements OnInit {
  @Input() articleSwipeList:Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
