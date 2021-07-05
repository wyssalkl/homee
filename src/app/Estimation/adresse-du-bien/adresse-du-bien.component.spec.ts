import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseDuBienComponent } from './adresse-du-bien.component';

describe('AdresseDuBienComponent', () => {
  let component: AdresseDuBienComponent;
  let fixture: ComponentFixture<AdresseDuBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdresseDuBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseDuBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
