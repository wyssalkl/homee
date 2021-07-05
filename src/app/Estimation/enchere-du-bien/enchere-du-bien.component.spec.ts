import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchereDuBienComponent } from './enchere-du-bien.component';

describe('EnchereDuBienComponent', () => {
  let component: EnchereDuBienComponent;
  let fixture: ComponentFixture<EnchereDuBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnchereDuBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnchereDuBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
