import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksComponent } from './bookmarks.component';
import { CoreModule } from '../../modules/core/core.module';

@NgModule({
  declarations: [BookmarksComponent],
  exports: [BookmarksComponent],
  imports: [
    CommonModule,
    BookmarksRoutingModule,
    CoreModule
  ]
})
export class BookmarksModule { }
