import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WynikComponent } from './wynik.component';

describe('WynikComponent', () => {
  let component: WynikComponent;
  let fixture: ComponentFixture<WynikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WynikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WynikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
