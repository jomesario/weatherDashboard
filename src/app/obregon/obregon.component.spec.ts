import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObregonComponent } from './obregon.component';

describe('ObregonComponent', () => {
  let component: ObregonComponent;
  let fixture: ComponentFixture<ObregonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObregonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObregonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
