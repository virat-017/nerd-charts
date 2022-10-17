import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidelistBarComponent } from './sidelist-bar.component';

describe('SidelistBarComponent', () => {
  let component: SidelistBarComponent;
  let fixture: ComponentFixture<SidelistBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidelistBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidelistBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
