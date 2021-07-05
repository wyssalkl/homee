import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherAgenceComponent } from './rechercher-agence.component';

describe('RechercherAgenceComponent', () => {
  let component: RechercherAgenceComponent;
  let fixture: ComponentFixture<RechercherAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
