import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegScuccessComponent } from './reg-scuccess.component';

describe('RegScuccessComponent', () => {
  let component: RegScuccessComponent;
  let fixture: ComponentFixture<RegScuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegScuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegScuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
