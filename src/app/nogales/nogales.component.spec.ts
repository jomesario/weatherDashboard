import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NogalesComponent } from './nogales.component';

describe('NogalesComponent', () => {
  let component: NogalesComponent;
  let fixture: ComponentFixture<NogalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NogalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NogalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
