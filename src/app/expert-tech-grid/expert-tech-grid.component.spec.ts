import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertTechGridComponent } from './expert-tech-grid.component';

describe('ExpertTechGridComponent', () => {
  let component: ExpertTechGridComponent;
  let fixture: ComponentFixture<ExpertTechGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertTechGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertTechGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
