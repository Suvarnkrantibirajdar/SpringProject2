import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDapartmentComponent } from './update-dapartment.component';

describe('UpdateDapartmentComponent', () => {
  let component: UpdateDapartmentComponent;
  let fixture: ComponentFixture<UpdateDapartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDapartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDapartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
