import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationDuBienComponent } from './information-du-bien.component';

describe('InformationDuBienComponent', () => {
  let component: InformationDuBienComponent;
  let fixture: ComponentFixture<InformationDuBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationDuBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationDuBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
