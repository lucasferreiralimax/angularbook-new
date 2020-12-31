import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { HeaderComponent } from '../../components/header/header.component';
import { AccountsComponent } from '../../components/accounts/accounts.component';

@NgModule({
  declarations: [HeaderComponent, AccountsComponent],
  exports: [HeaderComponent, AccountsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
