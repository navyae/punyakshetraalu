import {
  AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild,
  ViewChildren
} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';



@Component({
  selector: 'app-punyakshetraalu-feature',
  templateUrl: './punyakshetraalu-feature.component.html',
  styleUrls: ['./punyakshetraalu-feature.component.less']
})
export class PunyakshetraaluFeatureComponent implements AfterViewInit {
  @ViewChild('articleGallery') private articlesGallery: ElementRef;
  @ViewChildren('eachImage', { read: ElementRef}) private eachImage: QueryList<any>;
  @ViewChild('img-1') private activeImage: ElementRef;
  ImagesArray = [
    ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fQ1tiy0aQJIMeV2U8M_-vDvxdbZ0KgK8vZ6gzgoya8Yiazn9 ',
    ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo52czfI-t5GmRUwWxE-W5C2oLhKes3bkIyTCVeHkDNMT7M-R_ ',
    ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbL4o7aBm42cuIKJ45x9OTI9ZhU0YupsorD9aTOEgDVXGzzGC1 ',
    ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoRu8t8Ss5siibNBcSOdCrGIXaxEaLNarh3iviKN9krRG1TUv ',
    ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZB3zhDGfd4ccgWegPjN6hYIkeGlHgm8tO-Q9aCsuCBCOORBgBTJXN_64 ',
    ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpaGi6qpGc4fyi2WZSj6UT3ay0pHm17bHjoD3TWG5I8xraK4Wm ',
  ];
  imageQueryList: Array<any>;
  ImageCount = this.ImagesArray.length;
  galleryImageWidth;
  galleryImageHeight;
  imageId = 1;
  constructor( private eref: ElementRef, private render: Renderer2, private _DomSanitizationService: DomSanitizer ) {

  }

  ngAfterViewInit() {
    this.galleryImageWidth = this.ImagesArray.length > 3 ? Math.floor(this.articlesGallery.nativeElement.offsetWidth / 3) : Math.floor(this.articlesGallery.nativeElement.offsetWidth / this.ImagesArray.length);
    this.galleryImageHeight = this.ImagesArray.length > 3 ? this.articlesGallery.nativeElement.offsetHeight / 2 : this.articlesGallery.nativeElement.offsetHeight;
    this.imageQueryList = this.eachImage.toArray();
    const self = this;
    this.imageQueryList.forEach(function (ele) {

      self.render.setStyle(ele.nativeElement, 'width', self.galleryImageWidth + 'px');
      self.render.setStyle(ele.nativeElement, 'height', self.galleryImageHeight + 'px');
    });

    this.render.setStyle(this.eref.nativeElement.querySelector('#img-1'), "border-left", '10px solid blue');
  }
  onEmitImageId(e){
    var prevImageId = this.imageId > e ? this.imageId : e - 1;
    this.imageId = e;
    var EmitImage = '#img-' + this.imageId;
    var prevEmitImage = '#img-' + prevImageId;
    this.removeBorder(prevEmitImage);
    this.addBorder(EmitImage);

  }

  removeBorder(ele){
    this.render.setStyle(this.eref.nativeElement.querySelector(ele), "border", '2px solid #664b00');

  }

  addBorder(ele){
    this.render.setStyle(this.eref.nativeElement.querySelector(ele), "border-left", '10px solid blue');
  }




}
