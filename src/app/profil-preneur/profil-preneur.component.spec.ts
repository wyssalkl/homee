import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPreneurComponent } from './profil-preneur.component';

describe('ProfilPreneurComponent', () => {
  let component: ProfilPreneurComponent;
  let fixture: ComponentFixture<ProfilPreneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilPreneurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
