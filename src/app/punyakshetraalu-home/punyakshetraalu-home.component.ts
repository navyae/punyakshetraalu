import {Component, ElementRef, OnInit, Renderer, style, trigger} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-punyakshetraalu-home',
  templateUrl: './punyakshetraalu-home.component.html',
  styleUrls: ['./punyakshetraalu-home.component.less']
})
export class PunyakshetraaluHomeComponent implements OnInit {


  data_indicator = true;
  p_carausel_images = [
    {
      src: 'http://www.tripcrafters.com/images/articles/slides/21364885761.jpg',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/NatarajaMET.JPG',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Rear_View_of_Keshava_Temple_at_Somanathapura.jpg',
    }
  ];
  slideNum;
  constructor(private render: Renderer, private eref: ElementRef) {
    setInterval(() => { this.nextSlide(); }, 5000 );
  }
  ngOnInit() {
    this.slideNum = 0;
    this.setElementImage(this.slideNum);

  }

  setElementImage(num) {
    this.render.setElementAttribute(document.getElementById('myImage'), 'src', this.p_carausel_images[num].src);

  }
  previousSlide() {
    if ( this.slideNum > 0) {
      this.slideNum--;
    } else if ( this.slideNum === 0) {
      this.slideNum = 2;
    }
    this.setElementImage(this.slideNum);
  };

  nextSlide() {
    if ( this.slideNum < 2) {
      this.slideNum++;
    } else if (this.slideNum >= 2 ) {
      this.slideNum = 0;
    }
    this.setElementImage(this.slideNum);
  }
}
