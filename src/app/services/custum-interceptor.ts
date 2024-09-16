import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustumInterceptor implements HttpInterceptor{

  constructor(){}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('accessToken');
  
    if (accessToken) {
      console.log('Token encontrado:', accessToken); // Adicione esta linha para depuração
  
      const clonedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
      });
      return next.handle(clonedReq);
    } else {
      console.log('Nenhum token encontrado'); // Adicione esta linha para depuração
      return next.handle(req);
    }
  }
  
  
  }
  