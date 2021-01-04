import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkmodeComponent } from '../../components/darkmode/darkmode.component';
import { PostComponent } from '../../components/post/post.component';
import { ComplementaryComponent } from '../../components/complementary/complementary.component';

@NgModule({
  declarations: [
    DarkmodeComponent,
    PostComponent,
    ComplementaryComponent
  ],
  exports: [
    DarkmodeComponent,
    PostComponent,
    ComplementaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
