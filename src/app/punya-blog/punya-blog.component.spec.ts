import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyaBlogComponent } from './punya-blog.component';

describe('PunyaBlogComponent', () => {
  let component: PunyaBlogComponent;
  let fixture: ComponentFixture<PunyaBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyaBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyaBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
