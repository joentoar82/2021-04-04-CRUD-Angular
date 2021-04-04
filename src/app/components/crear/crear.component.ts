
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { UserService } from '../../service/user.service'


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public user: User;

  //_id, firstName, lastName, keyCode, country, city, email, contact, request
  constructor(private userService: UserService) { 
    this.user = new User('', '', '', 0, '', '', '', 0, '')
  }

  ngOnInit(): void {}

  registrar(){
    this.userService.registrarUsuario(this.user).subscribe(
      (res: any) => {
        if(res.statusCode !== 200) {
          alert('No se pudo registrar el usuario');
        } else {
          alert('Registro exitoso');
        }
      },
      (error)=>{
        var errorMensaje = <any>error;
        if(errorMensaje != null) {
           console.log(error)
        }
      }
    )
  }

}
