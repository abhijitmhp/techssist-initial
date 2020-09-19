import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAsExpertComponent } from './join-as-expert.component';

describe('JoinAsExpertComponent', () => {
  let component: JoinAsExpertComponent;
  let fixture: ComponentFixture<JoinAsExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinAsExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinAsExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
