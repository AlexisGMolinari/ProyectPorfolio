import { Component } from '@angular/core';
import { Router } from '@angular/router'; //Agregado para poder utilizar las rutas de navegacion

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent {

  constructor(private router: Router) { }

  navigateTo(destination: string) {
    this.router.navigate([`/${destination}`]);
  }
  
}
