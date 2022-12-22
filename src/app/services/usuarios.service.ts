import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerUsuarios(){
    let params = new HttpParams();
      params = params.append('page','1');
      params = params.append('nombre','Francisco Adolfo Aguilar Gómez');

    return this.http.get('https://reqres.in/api/users',{
      params
    }).pipe(
      map((resp:any)=>resp['data'])
    )
  }
}
