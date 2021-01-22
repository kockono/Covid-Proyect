import { Injectable } from '@angular/core';        // Libreria para que el servicio pueda consumirse en cualquier lado de la aplicación
import { HttpClient } from '@angular/common/http'; // Libreria para recibir peticiones o enviar peticiones a servidores (Apis)

@Injectable({
  providedIn: 'root'
})
export class ApiCovidService {

  constructor(private http:HttpClient) // Aquí instanciamos el modulo para hacer peticiones a backends
  { } 

  getCovidInfo() { // Aquí retorna la peticion de la apí 
    return this.http.get('https://corona.lmao.ninja/v2/countries/MEX')
  }
}
