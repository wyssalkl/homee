import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProprietaireComponent } from './register-proprietaire.component';

describe('RegisterProprietaireComponent', () => {
  let component: RegisterProprietaireComponent;
  let fixture: ComponentFixture<RegisterProprietaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterProprietaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
