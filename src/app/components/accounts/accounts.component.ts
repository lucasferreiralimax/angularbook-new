import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@services/login.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  @Input() show: boolean = false;
  @Output() actionAccounts = new EventEmitter();

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginLoggout() {
    this.loginService.logout()
    this.router.navigate(['login'])
  }

}
