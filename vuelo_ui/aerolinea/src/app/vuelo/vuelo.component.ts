import { Component, OnInit } from '@angular/core';
import { Vuelo } from '../vuelo/interface/vuelo';
import { VueloService } from './service/vuelo.service';
import { Router } from '@angular/router';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';

@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VueloComponent implements OnInit {

  selectedLanguage = 'es';

  vuelos : Vuelo[];
  

  constructor(
    private router: Router,
    private vueloService : VueloService,
    public translateService: TranslateService,
  ) { 
  
    this.obtenerVuelos(); 
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage) 
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

  selectLanguage(lang: string) {
    this.translateService.use(lang);
  }

  

  ngOnInit(): void {
  }

}
