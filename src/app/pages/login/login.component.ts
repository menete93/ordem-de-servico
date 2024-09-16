import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DefaultLoginLayoutComponent } from './../../views/components/default-login-layout/default-login-layout.component';
import { Component, NgModule } from '@angular/core';
import { TecnicoService } from 'src/app/services/tecnico..service';
import { PrimaryInputComponent } from 'src/app/components/primary-input/primary-input.component';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/models/Login';

@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    DefaultLoginLayoutComponent,PrimaryInputComponent, ReactiveFormsModule,
 ],
})





export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
   private loginService: LoginService,
   private service: TecnicoService,
  ){
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  // submit(){
  //   //this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
  //     this.loginService.login(this.loginForm.value).subscribe((res) =>{
  //       console.log(this.loginForm) 
  //       if(res){
  //         this.service.message("Login feito com sucesso!","ok",2000)

  //       }
  //     //error: () => this.service.message("Erro inesperado! Tente novamente mais tarde","ok",2000)
  //     this.router.navigate(['home'])

  //   }, err => {

  //     if(err == 401){
  //       this.service.message("Erro inesperado! Tente novamente mais tarde","ok",2000)
  //     }
  //   })
  // }

    submit(){
      this.loginService.login(this.loginForm.value).subscribe({
        
        next: () =>this.service.message("Login feito com sucesso!","ok",2000),
        error: () =>  this.service.message("Erro inesperado! Tente novamente mais tarde","ok",2000)
      })
    }



  // submit() {
  //   this.loginService.login(this.loginForm.value).subscribe((res) => {
  //      console.log(res, "OQUE VAI SAIR")
  //     // localStorage.setItem('accessToken',res.accessToken)
  //     // localStorage.setItem("username", res.username)
  //     this.router.navigate(['home'])

      
  //   }, err => {
  
  //     // if (err.error.message.match('CPF ja cadastrado na Base de dados')) {
  //     //   this.service.message(err.error.message, 'OK', 4000)
  //     // }
  //     // console.log(err.error.message);
  //   })
  // }
  


  navigate(){

 
   //  this.router.navigate(["signup"])
    //console.log(this.loginForm) 
    console.log(this.loginForm.value) 
  }
}



