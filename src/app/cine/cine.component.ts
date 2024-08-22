import { Component } from '@angular/core';
import { CineService } from '../servicios/cine.service';

@Component({
  selector: 'app-cine',
  standalone: true,
  imports: [],
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent {
 constructor(private cineService:CineService){}


  storeCine(cine:any, direccion:any, ciudad:any){
    this.cineService.storeCine(cine.value,ciudad.value, direccion.value).subscribe({
      next: (data)=>{
          debugger
      },
      error: (error)=>{
          debugger
      }
    })
  }
}
