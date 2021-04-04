
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = 'http://localhost:3000/api/';

  constructor(private _http: HttpClient) { }

  //Registrar Usuario
  registrarUsuario(userParams): Observable<any> {
    let params = JSON.stringify(userParams);
    let options = new HttpHeaders().set('Content-type', 'application/json');

    return this._http
    .post(this.apiURL, params, {headers:options})
    .pipe((res)=>res);
  }


  //  Mostrar usuarios requerimiento
  mostrarUsuariosReq(req): Observable<any> {
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this._http.get(this.apiURL + 'req/' + req, options)
    .pipe((res) => res);

  }

  //  Actualizar usuarios
  actualizarUsuario(idUsuario, usuarioActualizado): Observable<any>{
    let params = JSON.stringify(usuarioActualizado)
    let options = {
      headers: new HttpHeaders({'content-Type': 'application/json'})
    }
    return this._http.put(this.apiURL + idUsuario, params, options)
    .pipe((res) => res)
  }

  //  Eliminar usuario
  eliminarUsuario(idUsuario): Observable<any>{
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this._http.delete(this.apiURL + idUsuario, options)
    .pipe((res) => res);
  }

}
