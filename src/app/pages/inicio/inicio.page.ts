import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewDidEnter, ViewDidLeave, ViewWillEnter, ViewWillLeave } from '@ionic/angular';

import { ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit,ViewWillEnter, ViewDidEnter, ViewWillLeave, ViewDidLeave {

  correo:string = "";
  loaded:boolean = false;
  
  @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLIonCardElement> | undefined;
  private animation: Animation | undefined;

  constructor(private activateRoute:ActivatedRoute,
              private router:Router,
              private animationCtrl: AnimationController
  ) { }

  
  ionViewDidLeave(): void {
    console.log("view did leave");
    
  }
  ionViewWillLeave(): void {
    console.log("view will leave");
    
  }

  ionViewDidEnter(): void {
    
  }
  ngAfterViewInit(): void {
    if (this.card) {
      this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');

      this.animation.play();
    }
  }





  ionViewWillEnter(): void {
   console.log("view will enter");
   
  }

  ngOnInit() {
    this.correo = this.activateRoute.snapshot.params["correo"];
    console.log("PARAMETRO URL  ----> ", this.correo);
    
    setTimeout(() =>{
      this.loaded = true;
    },4000)
  }


  viaje(){
    let destino = "Argentina";
                      //path: 'viaje/:destino',
    this.router.navigateByUrl('viaje/' + destino);
  }

  vehiculo(){
    let modelo = "BMW";
                      //path: 'vehiculo/:modelo',
    this.router.navigateByUrl('vehiculo/' + modelo);
  }

  

  play() {
    if (this.animation) {
      this.animation.play();
    }
  }

  pause() {
    if (this.animation) {
      this.animation.pause();
    }
  }

  stop() {
    if (this.animation) {
      this.animation.stop();
    }
  }



  logout(){
    this.router.navigateByUrl('/login');
  }

  perfil(){
    this.router.navigateByUrl('/perfil');
  }


}
function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}

