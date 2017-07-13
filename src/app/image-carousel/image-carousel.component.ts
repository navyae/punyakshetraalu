import {
  AfterViewInit, Component, ElementRef, Input, Output, OnChanges, OnInit, Renderer2, ViewChild,
  EventEmitter
} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.less']
})
export class ImageCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('carouselCurrentImage') carouselCurrentImage:ElementRef;

  @Input() imageArray: Array<any>;
  @Output() emitImageId: EventEmitter<any> = new EventEmitter();
  initImageId = 0;
  displayId = this.initImageId+1;
  totalImages;
  featureImage;
  MainImageElement;

  constructor( private _DomSanitizationService: DomSanitizer, private eref: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    this.featureImage = this.imageArray[ this.initImageId ];
    this.totalImages = this.imageArray.length
  }

  ngAfterViewInit(){
      this.MainImageElement = this.carouselCurrentImage.nativeElement;
  }
  prevImage(e){
    if(this.initImageId>0){
      this.initImageId--;
      this.displayId = this.initImageId+1;
      this.featureImage = this.imageArray[ this.initImageId ];
      this.emitImageId.emit(this.displayId);

    }


  }
  nextImage(e){
    if(this.initImageId<this.totalImages-1){
      this.initImageId++;
      this.displayId = this.initImageId+1;
      this.featureImage = this.imageArray[ this.initImageId ];
      this.emitImageId.emit(this.displayId);

    }


  }

}
