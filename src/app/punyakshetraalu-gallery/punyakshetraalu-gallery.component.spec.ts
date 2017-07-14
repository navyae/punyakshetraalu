import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakshetraaluGalleryComponent } from './punyakshetraalu-gallery.component';

describe('PunyakshetraaluGalleryComponent', () => {
  let component: PunyakshetraaluGalleryComponent;
  let fixture: ComponentFixture<PunyakshetraaluGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakshetraaluGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakshetraaluGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
