import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-prescribed-articles',
  templateUrl: './prescribed-articles.component.html',
  styleUrls: ['./prescribed-articles.component.less']
})
export class PrescribedArticlesComponent implements OnInit {
  @Input() otherArticles: Array<any>;

  constructor(private _DomSanitizationService: DomSanitizer) { }

  ngOnInit() {
  }

}
