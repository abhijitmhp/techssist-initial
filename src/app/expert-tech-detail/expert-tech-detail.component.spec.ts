import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertTechDetailComponent } from './expert-tech-detail.component';

describe('ExpertTechDetailComponent', () => {
  let component: ExpertTechDetailComponent;
  let fixture: ComponentFixture<ExpertTechDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertTechDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertTechDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
