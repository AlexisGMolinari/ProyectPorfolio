import { Component } from '@angular/core';
import { Router } from '@angular/router'; //Agregado para poder utilizar las rutas de navegacion

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: []
})
export class ProyectosComponent {
  constructor(private router: Router) {}

  redirectTo(){
    this.router.navigate(['/contacto'])
  }
}
