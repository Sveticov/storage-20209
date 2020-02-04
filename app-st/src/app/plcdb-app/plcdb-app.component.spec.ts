import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlcdbAppComponent } from './plcdb-app.component';

describe('PlcdbAppComponent', () => {
  let component: PlcdbAppComponent;
  let fixture: ComponentFixture<PlcdbAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlcdbAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlcdbAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
