import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, tap } from 'rxjs';
import { Tecnicos } from '../models/Tecnicos';
import { Login } from '../models/Login';
import { enviroment } from '../enviroments/enviroment.';
import { Signup } from '../models/signup.';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  baseUrl: string = enviroment.baseUrl;
  constructor(
  private http: HttpClient,
  private snack : MatSnackBar
  ) { }


  login(login: Login):Observable<Login>{
  const url  =this.baseUrl +"/login";
  return this.http.post<Login>(url,login).pipe(
    tap((value) => {
      localStorage.setItem("accessToken", login.accessToken)
      localStorage.setItem("username", login.username)
      console.log(login.accessToken,"TOKEN")
    })
  )
}


// login(login: Login): Observable<LoginResponse> {
//   const url = this.baseUrl + "/login";
//   return this.http.post<LoginResponse>(url, login).pipe(
//     tap((value) => {

      
//    sessionStorage.setItem("accessToken", value.token);
//       console.log(value, "TOKEN");
//     })
//   );
// }




signup(signup: Signup):Observable<Signup[]>{
  const url  =this.baseUrl +"/register";
  return this.http.post<Signup[]>(url,signup).pipe(
    tap((value) => {
      sessionStorage.setItem("auth-token", signup.token)
      sessionStorage.setItem("username", signup.password)
    })
  )
}



}


