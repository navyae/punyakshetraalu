import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakshetraaluContactComponent } from './punyakshetraalu-contact.component';

describe('PunyakshetraaluContactComponent', () => {
  let component: PunyakshetraaluContactComponent;
  let fixture: ComponentFixture<PunyakshetraaluContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakshetraaluContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakshetraaluContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
