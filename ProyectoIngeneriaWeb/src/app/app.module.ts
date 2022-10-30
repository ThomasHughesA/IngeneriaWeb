import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroSesionComponent } from './registro-sesion/registro-sesion.component';
import { BodegaComponent } from './bodega/bodega.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { HeaderFoodyComponent } from './header-foody/header-foody.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    RegistroSesionComponent,
    BodegaComponent,
    PedidosComponent,
    HeaderFoodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
