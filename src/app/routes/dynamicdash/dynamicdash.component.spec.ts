import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicdashComponent } from './dynamicdash.component';

describe('DynamicdashComponent', () => {
  let component: DynamicdashComponent;
  let fixture: ComponentFixture<DynamicdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
