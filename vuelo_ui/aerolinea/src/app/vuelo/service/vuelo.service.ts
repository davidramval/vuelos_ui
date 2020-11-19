import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vuelo } from '../interface/vuelo';


@Injectable({
  providedIn: 'root'
})
export class VueloService {
  RUTA_API="http://localhost:9898/api";
  public vuelo : Vuelo;

  constructor(private httpClient:HttpClient) {}

  getById(id : any){
    return this.httpClient.get(this.RUTA_API + '/vuelos/' + id);
  }

  getAll(){
    return this.httpClient.get(this.RUTA_API + '/vuelos/all');
  }
}