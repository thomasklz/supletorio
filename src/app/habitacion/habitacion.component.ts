import { Component } from '@angular/core';
import { HabitacionService } from '../servicios/habitacion.service';


@Component({
  selector: 'app-habitacion',
  standalone: true,
  imports: [],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css'
})
export class HabitacionComponent {
   cines:any;
   constructor(private habitacionService:HabitacionService){}

  storeHabitacion(cine:any,pelicula:any,num_habitacion:any,num_asientos:any){

    
  }

  ngOnInit(){
    this.getCines();
  }
  
  getCines(){
    this.habitacionService.getCine().subscribe({
      next: (data:any)=>{
         this.cines = data.Cines;
      },
      error: (error)=>{
          debugger
      }
    })
  }
}
