/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { mapinformationComponent } from './mapinformation.component';

describe('map&informationComponent', () => {
  let component: mapinformationComponent;
  let fixture: ComponentFixture<mapinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mapinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mapinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
