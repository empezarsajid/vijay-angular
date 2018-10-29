import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcyDetailComponent } from './ecy-detail.component';

describe('EcyDetailComponent', () => {
  let component: EcyDetailComponent;
  let fixture: ComponentFixture<EcyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
