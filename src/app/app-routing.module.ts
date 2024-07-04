import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AlmacenamientoComponent } from './components/almacenamiento/almacenamiento.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Inicio' }},
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'almacenamiento', component: AlmacenamientoComponent },
  { path: 'contacto', component: ContactoComponent, data: { title: 'Contacto' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
