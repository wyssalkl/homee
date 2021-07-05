import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceventeComponent } from './annoncevente.component';

describe('AnnonceventeComponent', () => {
  let component: AnnonceventeComponent;
  let fixture: ComponentFixture<AnnonceventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceventeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
