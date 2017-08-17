import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-punyakshetraalu-contact',
  templateUrl: './punyakshetraalu-contact.component.html',
  styleUrls: ['./punyakshetraalu-contact.component.less']
})
export class PunyakshetraaluContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'contactedPerson': new FormControl(null, Validators.required),
      'personalEmail': new FormControl(null, [Validators.required, Validators.email]),
      'personalPhone': new FormControl(null),
      'Question': new FormControl(null, Validators.required)
    })
  }

  onQueSubmit(){
    console.log(this.contactForm);
  }

}
