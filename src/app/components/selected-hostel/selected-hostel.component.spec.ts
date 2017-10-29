import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedHostelComponent } from './selected-hostel.component';

describe('SelectedHostelComponent', () => {
  let component: SelectedHostelComponent;
  let fixture: ComponentFixture<SelectedHostelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedHostelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
