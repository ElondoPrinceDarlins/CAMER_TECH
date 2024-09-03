import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniciansComponent } from './technicians.component';

describe('TechniciansComponent', () => {
  let component: TechniciansComponent;
  let fixture: ComponentFixture<TechniciansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechniciansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechniciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
