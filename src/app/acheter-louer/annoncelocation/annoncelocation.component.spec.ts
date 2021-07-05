import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncelocationComponent } from './annoncelocation.component';

describe('AnnoncelocationComponent', () => {
  let component: AnnoncelocationComponent;
  let fixture: ComponentFixture<AnnoncelocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoncelocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
