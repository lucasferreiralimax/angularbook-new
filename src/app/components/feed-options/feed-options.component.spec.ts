import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedOptionsComponent } from './feed-options.component';

describe('FeedOptionsComponent', () => {
  let component: FeedOptionsComponent;
  let fixture: ComponentFixture<FeedOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
