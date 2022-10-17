import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalClusterComponent } from './regional-cluster.component';

describe('RegionalClusterComponent', () => {
  let component: RegionalClusterComponent;
  let fixture: ComponentFixture<RegionalClusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionalClusterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionalClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
