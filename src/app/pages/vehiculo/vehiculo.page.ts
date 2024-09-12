import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit {

  constructor(private router:Router) { }
  
marca:string = ''
modelo:string = ''
color:string = ''
patente:string = ''
anio:number = 0
combustible:string = ''
capacidad:number = 0
id:string = ''

  ngOnInit() {
  }

  agregar(){
    this.router.navigateByUrl("/listcar");
  }

}
