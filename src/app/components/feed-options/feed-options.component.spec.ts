import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FeedOptionsComponent } from './feed-options.component';

describe('FeedOptionsComponent', () => {
  let component: FeedOptionsComponent;
  let fixture: ComponentFixture<FeedOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedOptionsComponent ],
      imports: [ HttpClientTestingModule ]
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
