import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewsComponent } from './views.component';
import { FeedComponent } from '../components/feed/feed.component';
import { BookmarksComponent } from '../components/bookmarks/bookmarks.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      {
        path: '',
        component: FeedComponent
      },
      {
        path: 'bookmarks',
        component: BookmarksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
