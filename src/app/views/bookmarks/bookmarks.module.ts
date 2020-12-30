import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksComponent } from './bookmarks.component';

@NgModule({
  declarations: [BookmarksComponent],
  exports: [BookmarksComponent],
  imports: [
    CommonModule,
    BookmarksRoutingModule
  ]
})
export class BookmarksModule { }
