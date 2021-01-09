import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { HeaderComponent } from '@components/header/header.component';
import { SearchComponent } from '@components/search/search.component';
import { AccountsComponent } from '@components/accounts/accounts.component';
import { CreateComponent } from '@components/create/create.component';
import { NotificationsComponent } from '@components/notifications/notifications.component';
import { FooterComponent } from '@components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    AccountsComponent,
    CreateComponent,
    NotificationsComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    AccountsComponent,
    CreateComponent,
    NotificationsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
