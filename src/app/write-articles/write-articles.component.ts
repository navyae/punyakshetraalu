import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-write-articles',
  templateUrl: './write-articles.component.html',
  styleUrls: ['./write-articles.component.less']
})
export class WriteArticlesComponent implements OnInit {
  articleForm: FormGroup;

  constructor() { }

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
    console.log(this.articleForm);
  }
  onAddPara(){
    (<FormArray>this.articleForm.get('description')).push(new FormControl(null, Validators.required))
  }
  onAddImages(){
    (<FormArray>this.articleForm.get('articleImages')).push(new FormControl(null, Validators.required))
  }

}
