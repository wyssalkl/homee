import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Annonce1Component } from './annonce1.component';

describe('Annonce1Component', () => {
  let component: Annonce1Component;
  let fixture: ComponentFixture<Annonce1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Annonce1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Annonce1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
