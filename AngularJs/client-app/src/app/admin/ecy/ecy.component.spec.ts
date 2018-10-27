import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcyComponent } from './ecy.component';

describe('EcyComponent', () => {
  let component: EcyComponent;
  let fixture: ComponentFixture<EcyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
