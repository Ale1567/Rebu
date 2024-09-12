import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listviaje',
  templateUrl: './listviaje.page.html',
  styleUrls: ['./listviaje.page.scss'],
})
export class ListviajePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  confirmar(){
    this.router.navigateByUrl("/inicio");
  }
}
