import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodegaComponent } from './bodega/bodega.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { RegistroSesionComponent } from './registro-sesion/registro-sesion.component';
import { HeaderFoodyComponent } from './header-foody/header-foody.component';


const routes: Routes = [
  {path: 'bodega', component:BodegaComponent},
  {path: 'inicio-sesion',component:InicioSesionComponent},
  {path: 'pedidos',component:PedidosComponent},
  {path: 'registro-sesion',component:RegistroSesionComponent},
  {path: '',component:HeaderFoodyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
