import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilDashbordComponent } from './profil-dashbord.component';

describe('ProfilDashbordComponent', () => {
  let component: ProfilDashbordComponent;
  let fixture: ComponentFixture<ProfilDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilDashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
