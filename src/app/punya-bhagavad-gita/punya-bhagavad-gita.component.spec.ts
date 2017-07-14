import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyaBhagavadGitaComponent } from './punya-bhagavad-gita.component';

describe('PunyaBhagavadGitaComponent', () => {
  let component: PunyaBhagavadGitaComponent;
  let fixture: ComponentFixture<PunyaBhagavadGitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyaBhagavadGitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyaBhagavadGitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
