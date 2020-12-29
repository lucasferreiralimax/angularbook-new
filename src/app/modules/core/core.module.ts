import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { HeaderComponent } from '../../components/header/header.component';
import { BookmarksComponent } from '../../components/bookmarks/bookmarks.component';

@NgModule({
  declarations: [HeaderComponent, BookmarksComponent],
  exports: [HeaderComponent, BookmarksComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
