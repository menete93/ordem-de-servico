import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimaryInputComponent } from 'src/app/components/primary-input/primary-input.component';
import { LoginService } from 'src/app/services/login.service';
import { TecnicoService } from 'src/app/services/tecnico..service';
import { DefaultLoginLayoutComponent } from 'src/app/views/components/default-login-layout/default-login-layout.component';


interface SignupForm {
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-signup',
  standalone:true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  imports: [
    DefaultLoginLayoutComponent,PrimaryInputComponent, ReactiveFormsModule,
 ],
})
export class SignupComponent {

  signupForm!: FormGroup<SignupForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private service: TecnicoService,
  ){
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit(){
    this.loginService.login(this.signupForm.value.email).subscribe({
      next: () =>this.service.message("Login feito com sucesso!","ok",2000),
      error: () =>  this.service.message("Erro inesperado! Tente novamente mais tarde","ok",2000)
    })
  }


  // submit(){
  //   //this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
  //     this.loginService.signup(this.signupForm.value.email).subscribe((res) =>{
  //   // this.service.message("Login feito com sucesso!","ok",2000)
  //     //error: () => this.service.message("Erro inesperado! Tente novamente mais tarde","ok",2000)
  //   }, err => {

  //     if(err == 401){
  //       this.service.message("Erro inesperado! Tente novamente mais tarde","ok",2000)
  //     }
  //   })
  // }


  navigate(){
    this.router.navigate(["login"])
  }
}