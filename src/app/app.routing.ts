

import { Routes, RouterModule } from '@angular/router';

import { CrearComponent } from './components/crear/crear.component';

import { ListarComponent } from './components/listar/listar.component'

import { ActualizarComponent } from './components/actualizar/actualizar.component'

const appRoutes: Routes = [
   { path:'', component: CrearComponent },
   { path: 'crear', component: CrearComponent},
   { path: 'listar', component: ListarComponent},
   { path: 'actualizar', component: ActualizarComponent},
];

export const routing = RouterModule.forRoot(appRoutes)