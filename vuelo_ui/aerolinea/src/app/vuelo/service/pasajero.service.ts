import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pasajero } from '../interface/pasajero';


@Injectable({
  providedIn: 'root'
})
export class PasajeroService {
    RUTA_API="http://localhost:9898/api";

    constructor(private httpClient : HttpClient){ }

    getByNumeroDocumento(numeroDocumento : any){
        return this.httpClient.get(this.RUTA_API + '/pasajero/numeroDocumento/' + numeroDocumento);
    }

    savePasajero(pasajero:Pasajero){
      return this.httpClient.post(this.RUTA_API + '/pasajero', pasajero);
    }

    updatePasajero(pasajero:Pasajero){
      return this.httpClient.put(this.RUTA_API + '/pasajero/' + pasajero.id, pasajero);
    }
}