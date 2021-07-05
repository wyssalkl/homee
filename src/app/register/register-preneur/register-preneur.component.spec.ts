import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPreneurComponent } from './register-preneur.component';

describe('RegisterPreneurComponent', () => {
  let component: RegisterPreneurComponent;
  let fixture: ComponentFixture<RegisterPreneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPreneurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
