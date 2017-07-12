import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakshetraaluHomeComponent } from './punyakshetraalu-home.component';

describe('PunyakshetraaluHomeComponent', () => {
  let component: PunyakshetraaluHomeComponent;
  let fixture: ComponentFixture<PunyakshetraaluHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakshetraaluHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakshetraaluHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
