import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

export const appRoutes: Routes = [
  { path: '', component: InicioComponent }, // Ruta raíz
  { path: '**', redirectTo: '' } // Redirección para rutas no encontradas
];
