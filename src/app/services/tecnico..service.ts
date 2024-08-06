import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnicos } from '../models/Tecnicos';
import { enviroment } from '../enviroments/enviroment.';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

baseUrl: string = enviroment.baseUrl;

constructor(
private http: HttpClient,
private snack : MatSnackBar
  ) { }

findAll():Observable<Tecnicos[]>{
  const url  =this.baseUrl +"/tecnicos";
  return this.http.get<Tecnicos[]>(url);
}

findById(id:any):Observable<Tecnicos>{
  const url  = `${this.baseUrl}/tecnicos/${id}`;
 return this.http.get<Tecnicos>(url);
}


create(tecnico: Tecnicos):Observable<Tecnicos[]>{
  const url  =this.baseUrl +"/tecnicos";
  return this.http.post<Tecnicos[]>(url,tecnico);
}


// message(msg:String):void{

// this.snack.open('msg','OK',{
//   horizontalPosition:'end',
// verticalPosition:'top',
// duration:4000

// })

// }
update(tecnicos:Tecnicos):Observable<Tecnicos[]>{
  const url  =this.baseUrl +"/tecnicos/" + tecnicos.id;
  return this.http.put<Tecnicos[]>(url,tecnicos);
}

delete(id:any):Observable<void>{
  const url  =this.baseUrl +"/tecnicos/"+id;
  return this.http.delete<void>(url);
}


message(message:string, action:string, duration:number){
  this.snack.open(message,action,{ 
    duration:duration
  });
}



}