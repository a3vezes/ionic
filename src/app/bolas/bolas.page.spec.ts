import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolasPage } from './bolas.page';

describe('BolasPage', () => {
  let component: BolasPage;
  let fixture: ComponentFixture<BolasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
