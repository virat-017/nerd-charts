import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialNeedsComponent } from './special-needs.component';

describe('SpecialNeedsComponent', () => {
  let component: SpecialNeedsComponent;
  let fixture: ComponentFixture<SpecialNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialNeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
