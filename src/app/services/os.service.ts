import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { enviroment } from '../enviroments/enviroment.';
import { Observable } from 'rxjs';
import { OS } from '../models/Os';

@Injectable({
  providedIn: 'root'
})
export class OsService {

  baseUrl: string = enviroment.baseUrl;

  constructor(
  private http: HttpClient,
  private snack : MatSnackBar
    ) { }
  
  findAll():Observable<OS[]>{
    const url  =this.baseUrl +"/os";
    return this.http.get<OS[]>(url);
  }
  
  findById(id:any):Observable<OS>{
    const url  = `${this.baseUrl}/os/${id}`;
   return this.http.get<OS>(url);
  }
  
  
  create(os: OS):Observable<OS[]>{
    const url  =this.baseUrl +"/os";
    return this.http.post<OS[]>(url,os);
  }
  
  
  // message(msg:String):void{
  
  // this.snack.open('msg','OK',{
  //   horizontalPosition:'end',
  // verticalPosition:'top',
  // duration:4000
  
  // })
  
  // }
  update(os:OS):Observable<OS[]>{
    const url  =`${this.baseUrl}/os`;
    return this.http.put<OS[]>(url,os);
  }
  
  delete(id:any):Observable<void>{
    const url  =this.baseUrl +"/os/"+id;
    return this.http.delete<void>(url);
  }
  
  
  message(message:string, action:string, duration:number){
    this.snack.open(message,action,{ 
      duration:duration
    });
  }
  
  
  
  



























}



