import {Component, OnInit, Input, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-punya-dropdown',
  templateUrl: './punya-dropdown.component.html',
  styleUrls: ['./punya-dropdown.component.less']
})
export class PunyaDropdownComponent implements OnInit {
  @ViewChild('dropdownButton') styleButton: ElementRef;
  @ViewChild('dropdownListStyle') listContainer: ElementRef;
  @ViewChild('dcontainer') dropdownContainer:ElementRef;
  @Input() dropdownWidth;
  @Input() dropdownHeight;
  @Input() dropdownList:Array<any>;
  showList:boolean = true;


  currentCategory = 'Images';
  dropdownElement;
  listElement;
  wrapperElement;
  constructor(private eref:ElementRef, private render:Renderer2) {

  }

  ngAfterViewInit(){
    this.dropdownElement = this.styleButton.nativeElement;
    this.listElement = this.listContainer.nativeElement;
    this.wrapperElement = this.dropdownContainer.nativeElement;
    this.addDropdownContainer(this.wrapperElement);
    this.addStylesToBtn(this.dropdownElement);
    this.addList(this.listElement);
  }
  addDropdownContainer(e){
    this.render.setStyle(e, 'width', this.dropdownWidth);
    this.render.setStyle(e, 'float', 'right');


  }
  addList(el){
    this.render.setStyle(el, 'width', this.dropdownWidth);

  }
  addStylesToBtn(ele){
    this.render.setStyle(ele, 'width', this.dropdownWidth);
    this.render.setStyle(ele, 'height', this.dropdownHeight);
    console.log(this.styleButton.nativeElement)
  }
  ngOnInit() {
    console.log(this.dropdownList);

  }

  dropdownToggle(e){
    if(this.showList){
      this.render.setStyle(this.listElement, 'display', 'block');
      this.showList = false;
    } else{
      this.render.setStyle(this.listElement, 'display', 'none');
      this.showList = true;
    }

  }

}
