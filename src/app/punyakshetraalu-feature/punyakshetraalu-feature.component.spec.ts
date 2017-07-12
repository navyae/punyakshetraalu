import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakshetraaluFeatureComponent } from './punyakshetraalu-feature.component';

describe('PunyakshetraaluFeatureComponent', () => {
  let component: PunyakshetraaluFeatureComponent;
  let fixture: ComponentFixture<PunyakshetraaluFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakshetraaluFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakshetraaluFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
