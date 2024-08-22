import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor(private http:HttpClient) { }

  getCine(){
   return  this.http.get("http://127.0.0.1:8000/api/cine");
  }

}
