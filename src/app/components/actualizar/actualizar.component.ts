import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { CanActivate, Router } from '@angular/router'

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  public user: User;
  public usuarioEnStorage: any;

  constructor(private userService: UserService, private router: Router) { 
    this.user = new User('', '', '', 0, '', '', '', 0, '');
  }

  ngOnInit(): void {
    this.llenarFormulario()
  }

  llenarFormulario(){

    this.usuarioEnStorage = JSON.parse(localStorage.getItem('user'))

  }

  actualizar(){
    this.userService.actualizarUsuario(this.usuarioEnStorage._id, this.usuarioEnStorage)
    .subscribe((res:any) =>{
      if (res.statusCode !== 200 ){
        alert('No se pudo actualizar el usuario');
      } else {
        alert('Usuario actualizado');
        localStorage.clear();
        this.router.navigate(['/listar'])
      }
    }, 
    (error) =>{
      var errormensaje = <any>error
      if(errormensaje != null) {
        console.log(error);
      }
    }
    );
  }

}
