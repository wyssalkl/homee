import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceConnecteComponent } from './espace-connecte.component';

describe('EspaceConnecteComponent', () => {
  let component: EspaceConnecteComponent;
  let fixture: ComponentFixture<EspaceConnecteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceConnecteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceConnecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
