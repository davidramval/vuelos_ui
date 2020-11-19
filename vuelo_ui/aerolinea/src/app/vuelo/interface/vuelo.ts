import { Ciudad } from './ciudad';

export class Vuelo {
    "id": number;
    "numeroVuelo": string;
    "codigoAvion": string;
    "fechaSalida": Date;
    "ciudadSalida": Ciudad;
    "ciudadDestino": Ciudad;
    "pasajeroList": [];
}