import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedActionsComponent } from './feed-actions.component';

describe('FeedActionsComponent', () => {
  let component: FeedActionsComponent;
  let fixture: ComponentFixture<FeedActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
