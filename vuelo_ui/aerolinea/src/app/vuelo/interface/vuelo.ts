import { Ciudad } from './ciudad';
import { Pasajero } from './pasajero';

export class Vuelo {
    "id": number;
    "numeroVuelo": string;
    "codigoAvion": string;
    "fechaSalida": Date;
    "ciudadSalida": Ciudad;
    "ciudadDestino": Ciudad;
    "pasajeroList": Pasajero[];
}