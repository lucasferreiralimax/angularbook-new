import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { DarkmodeComponent } from '@components/darkmode/darkmode.component';
import { PostComponent } from '@components/post/post.component';
import { FeedListComponent } from '@components/feed-list/feed-list.component';
import { FeedActionsComponent } from '@components/feed-actions/feed-actions.component';
import { FeedOptionsComponent } from '@components/feed-options/feed-options.component';
import { ComplementaryComponent } from '@components/complementary/complementary.component';
import { LoadingComponent } from '@components/loading/loading.component';

@NgModule({
  declarations: [
    DarkmodeComponent,
    PostComponent,
    FeedListComponent,
    FeedActionsComponent,
    FeedOptionsComponent,
    ComplementaryComponent,
    LoadingComponent
  ],
  exports: [
    DarkmodeComponent,
    PostComponent,
    FeedListComponent,
    FeedActionsComponent,
    ComplementaryComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
