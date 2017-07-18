import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSwiperComponent } from './article-swiper.component';

describe('ArticleSwiperComponent', () => {
  let component: ArticleSwiperComponent;
  let fixture: ComponentFixture<ArticleSwiperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSwiperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
