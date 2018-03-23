import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBinderComponent } from './data-binder.component';

describe('DataBinderComponent', () => {
  let component: DataBinderComponent;
  let fixture: ComponentFixture<DataBinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
