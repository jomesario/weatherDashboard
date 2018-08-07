import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavojoaComponent } from './navojoa.component';

describe('NavojoaComponent', () => {
  let component: NavojoaComponent;
  let fixture: ComponentFixture<NavojoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavojoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavojoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
