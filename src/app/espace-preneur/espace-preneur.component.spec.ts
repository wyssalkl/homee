import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacePreneurComponent } from './espace-preneur.component';

describe('EspacePreneurComponent', () => {
  let component: EspacePreneurComponent;
  let fixture: ComponentFixture<EspacePreneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacePreneurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacePreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
