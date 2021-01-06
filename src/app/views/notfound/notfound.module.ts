import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundRoutingModule } from './notfound-routing.module';
import { NotfoundComponent } from './notfound.component';
import { SharedModule } from '@modules/shared/shared.module';

@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule,
    NotfoundRoutingModule,
    SharedModule
  ]
})
export class NotfoundModule { }
