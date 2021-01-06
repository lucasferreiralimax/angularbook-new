import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { BookmarksModule } from '../bookmarks/bookmarks.module';
import { SharedModule } from '@modules/shared/shared.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    BookmarksModule,
    SharedModule
  ]
})
export class FeedModule { }
