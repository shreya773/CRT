/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlertwarningComponent } from './alertwarning.component';

describe('AlertwarningComponent', () => {
  let component: AlertwarningComponent;
  let fixture: ComponentFixture<AlertwarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertwarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertwarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
