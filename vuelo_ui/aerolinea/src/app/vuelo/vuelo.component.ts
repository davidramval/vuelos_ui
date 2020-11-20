import { Component, OnInit } from '@angular/core';
import { Vuelo } from '../vuelo/interface/vuelo';
import { VueloService } from './service/vuelo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VueloComponent implements OnInit {

  vuelos : Vuelo[];
  

  constructor(
    private router: Router,
    private vueloService : VueloService,
  ) { 
  
    this.obtenerVuelos();  
  }

  seleccionarVuelo(vuelo : any) {
    this.vueloService.vueloSelected = vuelo;
    this.router.navigate(['vueloDetail']);
  }

  obtenerVuelos(){
    this.vueloService.getAll().subscribe((data:Vuelo[])=>{
      this.vuelos = data;
    });
  }

  

  ngOnInit(): void {
  }

}
