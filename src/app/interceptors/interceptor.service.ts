import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const headers = new HttpHeaders({
      'token-usuario': 'KJFJJFSDJFJKSDH'
    });

    const reqClone = req.clone({
      headers
    });
    
    return next.handle(reqClone).pipe(
      catchError( this.manejarError)
    );
  }

  manejarError(error:HttpErrorResponse){
    console.log('Sucedio un error');
    console.log('Registrado en el log file');
    console.warn(error);
    return throwError('Error personalizado')
  }

  constructor() { }
  
}
