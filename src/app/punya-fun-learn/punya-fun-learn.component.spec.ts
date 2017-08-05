import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyaFunLearnComponent } from './punya-fun-learn.component';

describe('PunyaFunLearnComponent', () => {
  let component: PunyaFunLearnComponent;
  let fixture: ComponentFixture<PunyaFunLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyaFunLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyaFunLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
