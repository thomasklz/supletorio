import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CineService {

  constructor(private http: HttpClient) { }

  storeCine(cine:string,ciudad:string, direccion:string){
    const parametros ={
      "cine": cine,
      "ciudad": ciudad,
      "direccion":direccion
    }
    return this.http.post('http://127.0.0.1:8000/api/cine', parametros)
  }

}
