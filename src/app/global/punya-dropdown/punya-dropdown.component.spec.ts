import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyaDropdownComponent } from './punya-dropdown.component';

describe('PunyaDropdownComponent', () => {
  let component: PunyaDropdownComponent;
  let fixture: ComponentFixture<PunyaDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyaDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyaDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
