import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenComputingComponent } from './green-computing.component';

describe('GreenComputingComponent', () => {
  let component: GreenComputingComponent;
  let fixture: ComponentFixture<GreenComputingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenComputingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenComputingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
