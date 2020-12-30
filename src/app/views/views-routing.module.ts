import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewsComponent } from './views.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule)
      },
      {
        path: 'bookmarks',
        loadChildren: () => import('./bookmarks/bookmarks.module').then(m => m.BookmarksModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
