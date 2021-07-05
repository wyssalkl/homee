import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnligneComponent } from './enligne.component';

describe('EnligneComponent', () => {
  let component: EnligneComponent;
  let fixture: ComponentFixture<EnligneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnligneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnligneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
