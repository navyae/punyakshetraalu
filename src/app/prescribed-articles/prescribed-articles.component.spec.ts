import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribedArticlesComponent } from './prescribed-articles.component';

describe('PrescribedArticlesComponent', () => {
  let component: PrescribedArticlesComponent;
  let fixture: ComponentFixture<PrescribedArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescribedArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescribedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
