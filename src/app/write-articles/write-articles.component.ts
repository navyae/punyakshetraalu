import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ArticleServiceService} from "../services/article-service.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-write-articles',
  templateUrl: './write-articles.component.html',
  styleUrls: ['./write-articles.component.less']
})
export class WriteArticlesComponent implements OnInit {
  articleForm: FormGroup;

  constructor(private _articleService: ArticleServiceService) { }

  ngOnInit() {
    this.articleForm = new FormGroup({
      'author': new FormControl(null, Validators.required),
      'title': new FormControl(null, Validators.required),
      //'description': new FormControl(null, Validators.required),
      'description': new FormArray([new FormControl(null, Validators.maxLength(200))]),
      'articleImages': new FormArray([new FormControl(null, Validators.required)])

    });
  }

  onSubmit(){
    console.log(this.articleForm.status, this.articleForm.value, JSON.stringify(this.articleForm.value));
    var ad = JSON.stringify(this.articleForm.value);
    this._articleService.writeArticles(ad).subscribe(
      (response: Response) => {
        console.log(JSON.stringify(response));
      }
    )

  }
  onAddPara(){
    (<FormArray>this.articleForm.get('description')).push(new FormControl(null, Validators.required))
  }
  onAddImages(){
    (<FormArray>this.articleForm.get('articleImages')).push(new FormControl(null, Validators.required))
  }

}
