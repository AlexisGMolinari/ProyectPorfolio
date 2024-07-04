import { Component } from '@angular/core';
import { Router } from '@angular/router'; //Agregado para poder utilizar las rutas de navegacion


@Component({
  selector: 'app-almacenamiento',
  templateUrl: './almacenamiento.component.html',
  styleUrls: []
})
export class AlmacenamientoComponent {
  constructor(private router: Router) {}

  redirectTo(){
    this.router.navigate(['/contacto'])
  }
}
