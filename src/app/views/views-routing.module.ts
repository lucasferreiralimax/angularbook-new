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
      },
      {
        path: 'lucasferreiralimax',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
