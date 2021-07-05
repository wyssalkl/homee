import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagenceComponent } from './paragence.component';

describe('ParagenceComponent', () => {
  let component: ParagenceComponent;
  let fixture: ComponentFixture<ParagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
