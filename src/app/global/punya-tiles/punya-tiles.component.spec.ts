import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyaTilesComponent } from './punya-tiles.component';

describe('PunyaTilesComponent', () => {
  let component: PunyaTilesComponent;
  let fixture: ComponentFixture<PunyaTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyaTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyaTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
