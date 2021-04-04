import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../service/user.service'; 

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public user: User
  public usuariosEncontrados: any = [];
  public  buscarReq: string;

  constructor(public userService: UserService) { 
    this.user = new User('', '', '', 0, '', '', '', 0, '')
  }

  ngOnInit(): void {}

  listar(){
    
    this.userService.mostrarUsuariosReq(this.buscarReq).subscribe(
      (res:any) => {
        this.usuariosEncontrados = res.allUsersReq;
          console.log(res)
      }, (error) => {
        var errormensaje = <any>error;
        if(errormensaje != null) {
          console.log(error)
        }

      });
  }
  
  guardarUsuario(usuario){
    const userString = JSON.stringify(usuario);
    localStorage.setItem('user', userString);
  }

  eliminar(userId){
    this.userService.eliminarUsuario(userId).subscribe(
      (res:any) =>{
        if(res.statusCode !== 200){
          alert('No se pudo eliminar el usuario')
        } else {
          alert('Usuario Eliminado');
          window.location.reload();
        }
      },
        (error) =>{
           console.log(error)
      }
    )
  }
}


