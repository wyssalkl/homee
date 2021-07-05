import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproposDuBienComponent } from './apropos-du-bien.component';

describe('AproposDuBienComponent', () => {
  let component: AproposDuBienComponent;
  let fixture: ComponentFixture<AproposDuBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AproposDuBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AproposDuBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
