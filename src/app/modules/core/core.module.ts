import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { HeaderComponent } from '../../components/header/header.component';
import { AccountsComponent } from '../../components/accounts/accounts.component';
import { FooterComponent } from '../../components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, AccountsComponent, FooterComponent],
  exports: [HeaderComponent, AccountsComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
