import { Routes } from '@angular/router';
import { CineComponent } from './cine/cine.component';
import { HabitacionComponent } from './habitacion/habitacion.component';

export const routes: Routes = [

   {
    path: 'cines', component:CineComponent
   } ,
   {
      path: 'habitaciones', component:HabitacionComponent
   } 
];
