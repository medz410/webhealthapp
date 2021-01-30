import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthProfileScreenComponent } from './health-profile-screen.component';

describe('HealthProfileScreenComponent', () => {
  let component: HealthProfileScreenComponent;
  let fixture: ComponentFixture<HealthProfileScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthProfileScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthProfileScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
