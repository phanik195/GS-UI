import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyemployeelistComponent } from './emptyemployeelist.component';

describe('EmptyemployeelistComponent', () => {
  let component: EmptyemployeelistComponent;
  let fixture: ComponentFixture<EmptyemployeelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyemployeelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyemployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
