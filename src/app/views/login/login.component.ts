import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginService } from '@services/login.service'
import { NotificationService } from '@services/notification.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;
  registerForm;
  loadingLogin = false;
  loadingCadastro = false;
  accountModal: boolean = false;
  root = (<any>window).document.body;

  constructor(
    private loginService: LoginService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['lucasferreiralimax@gmail.com', [
        Validators.required,
        Validators.email
      ]],
      password: ['lucas', Validators.required]
    })
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email_register: ['', [
        Validators.required,
        Validators.email
      ]],
      password_register: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  handleAccountModal(type: boolean): void {
    this.accountModal = type;
    if(type) {
      // this.root.querySelector('#post-content').focus()
      this.root.style.overflow = 'hidden'
    } else {
      this.root.removeAttribute('style')
    }
  }

  onSubmitLogin(formData: any) {
    this.loadingLogin = true
    this.loginForm.controls['password'].reset()

    this.loginService.loginUser(formData).subscribe(
      (res: any) => {
        this.loginService.validationSet(res)
        this.loadingLogin = false
        this.notificationService.notification(res.notification.type, res.notification.title, res.notification.content)
        if(this.loginService.validation()) {
          this.router.navigate(['/'])
        }
      },
      (err: any) => {
        this.loadingLogin = false
        if(err.status == 403) {
          this.notificationService.notification("error", "Acesso negado", "Tente novamente fazer login")
        } else {
          this.notificationService.notification("error", err.error, err.message)
        }
        console.log("error", err)
      }
    )
  }

  onSubmitCadastro(formData: any) {
    this.loadingCadastro = true
    formData.since = new Date()
    formData.background = "assets/cover.jpg"

    switch(formData.gender) {
      case 'woman':
        formData.photo = "assets/user_woman.jpg"
        break;
      case 'man':
        formData.photo = "assets/user_man.jpg"
        break;
      case 'others':
        formData.photo = "assets/user_other.jpg"
        break;
    }

    this.loginService.registerUser(formData).subscribe(
      (res: any) => {
        this.loadingCadastro = false
        this.notificationService.notification(res.notification.type, res.notification.title, res.notification.content)
        if(res.notification.content == "Usuário já cadastrado.") {
          this.registerForm.controls['email_register'].reset()
          this.registerForm.controls['password_register'].reset()
          this.handleAccountModal(false)
        } else {
          this.registerForm.reset()
          this.handleAccountModal(false)
        }
      },
      (err: any) => {
        this.loadingCadastro = false
        this.handleAccountModal(false)
        this.notificationService.notification("error", "Erro", "Aconteceu algum erro na base de dados tente novamente mais tarde")
        console.log(err)
      }
    )
  }
}
