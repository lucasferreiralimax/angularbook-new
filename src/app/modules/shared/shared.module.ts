import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkmodeComponent } from '../../components/darkmode/darkmode.component';
import { PostComponent } from '../../components/post/post.component';

@NgModule({
  declarations: [DarkmodeComponent, PostComponent],
  exports: [DarkmodeComponent, PostComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
