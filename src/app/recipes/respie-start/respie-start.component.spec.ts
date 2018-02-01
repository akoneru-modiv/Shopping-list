import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespieStartComponent } from './respie-start.component';

describe('RespieStartComponent', () => {
  let component: RespieStartComponent;
  let fixture: ComponentFixture<RespieStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespieStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespieStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
