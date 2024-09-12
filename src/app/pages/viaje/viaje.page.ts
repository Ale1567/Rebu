import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit, OnDestroy {

  costo:number = 0;
  fecha:string = "";
  uborigen:string = "";
  ubdestino:string= "";


  constructor(private router:Router) { }

  
  ngOnDestroy(): void {
    console.log("destruyendo!!");
    
  }

  destino:string = "";

  ngOnInit() {   
  }

  pago(){
      this.router.navigateByUrl("/listviaje")
    }
    





}
