import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroments/enviroment.';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseUrl: string = enviroment.baseUrl;

  constructor(
  private http: HttpClient,
  private snack : MatSnackBar
    ) { }
  
  findAll():Observable<Cliente[]>{
    const url  =this.baseUrl +"/cliente";
    return this.http.get<Cliente[]>(url);
  }
  
  findById(id:any):Observable<Cliente>{
    const url  = `${this.baseUrl}/cliente/${id}`;
   return this.http.get<Cliente>(url);
  }
  
  
  create(Cliente: Cliente):Observable<Cliente[]>{
    const url  =this.baseUrl +"/cliente";
    return this.http.post<Cliente[]>(url,Cliente);
  }
  

  update(Cliente:Cliente):Observable<Cliente[]>{
    const url  =this.baseUrl +"/cliente/" + Cliente.id;
    return this.http.put<Cliente[]>(url,Cliente);
  }
  
  delete(id:any):Observable<void>{
    const url  =this.baseUrl +"/cliente/"+id;
    return this.http.delete<void>(url);
  }
  
  
  message(message:string, action:string, duration:number){
    this.snack.open(message,action,{ 
      duration:duration
    });
  }
  
}
  