import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakshetraaluAboutComponent } from './punyakshetraalu-about.component';

describe('PunyakshetraaluAboutComponent', () => {
  let component: PunyakshetraaluAboutComponent;
  let fixture: ComponentFixture<PunyakshetraaluAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakshetraaluAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakshetraaluAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
