import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HermosilloComponent } from './hermosillo.component';

describe('HermosilloComponent', () => {
  let component: HermosilloComponent;
  let fixture: ComponentFixture<HermosilloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HermosilloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HermosilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
