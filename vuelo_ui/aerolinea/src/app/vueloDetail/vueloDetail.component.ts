import { Component, OnInit } from '@angular/core';
import { VueloService } from '../vuelo/service/vuelo.service';
import { Vuelo } from '../vuelo/interface/vuelo';
import { ActivatedRoute } from '@angular/router';
import { Pasajero } from '../vuelo/interface/pasajero';
import { PasajeroService } from '../vuelo/service/pasajero.service';


@Component({
  selector: 'app-vueloDetail',
  templateUrl: './vueloDetail.component.html',
  styleUrls: ['./vueloDetail.component.css']
})

export class vueloDetailComponent implements OnInit {
  
  private idVuelo : any;
  public vuelo : Vuelo = {
    "id": null,
    "numeroVuelo": null,
    "codigoAvion": null,
    "fechaSalida": null,
    "ciudadSalida": null,
    "ciudadDestino": null,
    "pasajeroList": [],
  }
  public pasajero : Pasajero = {
    "id": null,
    "nombres": null,
    "apellidos": null,
    "tipoDocumento": null,
    "numeroDocumento": null,
    "telefono": null,
    "correo": null,
    "direccion": null
  };
  habilitaGuardar : boolean;
  showFormPasajero : boolean;
 

  constructor(
    private vueloService : VueloService,
    private route: ActivatedRoute,
    private pasajeroService: PasajeroService,
  ) {
    this.habilitaGuardar = false;
    this.showFormPasajero = false;
  }

  ngOnInit(): void {
    this.vuelo = this.vueloService.vueloSelected;
  }

  getPasajeroByDocumento(){
    this.pasajeroService.getByNumeroDocumento(this.pasajero.numeroDocumento).subscribe((data:Pasajero)=>{
      if(data != null) {
        this.pasajero = data;
        this.showFormPasajero = true;
      } else {
        this.habilitaGuardar = true;
        this.showFormPasajero = true;
      }  
    });
  }

  clearPasajero() {
    this.pasajero = {
      "id": null,
      "nombres": null,
      "apellidos": null,
      "tipoDocumento": null,
      "numeroDocumento": null,
      "telefono": null,
      "correo": null,
      "direccion": null
    };
    this.habilitaGuardar = false;
    this.showFormPasajero = false;
  }

  savePasajero(){
    this.pasajeroService.savePasajero(this.pasajero).subscribe(
      (data : Pasajero) =>{
        this.pasajero = data;
        this.habilitaGuardar = false;
        alert("Pasajero se guardo correctamente!!!!!");
      },
      err => {
        alert("Paila");
      }
    )
  }

  updatePasajero(){
    this.pasajeroService.updatePasajero(this.pasajero).subscribe(
      (data : Pasajero) =>{
        this.pasajero = data;
        this.habilitaGuardar = false;
        alert("Pasajero se actualizo correctamente!!!!!");
      },
      err => {
        alert("Error actualizando el pasajero");
      }
    )
  }

  agregarPasajero() {
    const pasajeroExist = this.vuelo.pasajeroList.find(pasajero => this.pasajero.id === pasajero.id)
    if(pasajeroExist === undefined || pasajeroExist === null) {
      this.vuelo.pasajeroList.push(this.pasajero);
      this.updateVuelo();
    } else {
      alert("El pasajero ya se encuentra agregado a la lista");
    }
  }

  updateVuelo(){
    this.vueloService.updateVuelo(this.vuelo).subscribe(
      (data : Vuelo) => {
        this.vuelo = data;
        this.habilitaGuardar = false;
        alert("Vuelo actualizado correctamente!!!");
      },
      err => {
        alert("Error actualizando el vuelo!!!");
      } 
    );
  }

  quitarPasajero(index){
    this.vuelo.pasajeroList.splice( index, 1 );
    this.updateVuelo();
  }

}


