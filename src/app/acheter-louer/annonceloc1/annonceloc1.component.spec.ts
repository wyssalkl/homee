import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Annonceloc1Component } from './annonceloc1.component';

describe('Annonceloc1Component', () => {
  let component: Annonceloc1Component;
  let fixture: ComponentFixture<Annonceloc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Annonceloc1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Annonceloc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
