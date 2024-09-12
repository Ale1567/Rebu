import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre:string = ''
  correo:string = ''
  telefono:number = 0
  direccion:string = ''
  contrasena:string = ''
  confirmar:string = ''

  constructor(private router:Router) { }

  ngOnInit() {
  }

  registro(){
    if (this.contrasena != this.confirmar){
      alert("Las contraseñas son diferentes");
    }else{
      (this.router.navigateByUrl("/inicio"));
  }
}

}
