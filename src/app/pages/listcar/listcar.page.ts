import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcar',
  templateUrl: './listcar.page.html',
  styleUrls: ['./listcar.page.scss'],
})
export class ListcarPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  confirmar(){
    this.router.navigateByUrl("/inicio");
  }

}
