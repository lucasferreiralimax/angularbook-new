import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkmodeComponent } from '../../components/darkmode/darkmode.component';

@NgModule({
  declarations: [DarkmodeComponent],
  exports: [DarkmodeComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
