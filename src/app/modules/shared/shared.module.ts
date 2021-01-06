import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkmodeComponent } from '@components/darkmode/darkmode.component';
import { PostComponent } from '@components/post/post.component';
import { FeedListComponent } from '@components/feed-list/feed-list.component';
import { ComplementaryComponent } from '@components/complementary/complementary.component';

@NgModule({
  declarations: [
    DarkmodeComponent,
    PostComponent,
    FeedListComponent,
    ComplementaryComponent
  ],
  exports: [
    DarkmodeComponent,
    PostComponent,
    FeedListComponent,
    ComplementaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
