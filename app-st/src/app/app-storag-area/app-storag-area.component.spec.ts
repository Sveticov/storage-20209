import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStoragAreaComponent } from './app-storag-area.component';

describe('AppStoragAreaComponent', () => {
  let component: AppStoragAreaComponent;
  let fixture: ComponentFixture<AppStoragAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStoragAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStoragAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
