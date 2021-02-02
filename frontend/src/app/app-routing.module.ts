import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './views/bienvenida/bienvenida.component';
import { EncuestaComponent } from './views/encuesta/encuesta.component';
import { InicioSesionComponent } from './views/inicio-sesion/inicio-sesion.component';
import { NewAccountComponent } from './views/new-account/new-account.component';

const routes: Routes = [
  {path: '', component:BienvenidaComponent},
  {path: 'user', component:BienvenidaComponent},
  {path: 'admin', component:BienvenidaComponent},
  {path: 'encuesta', component:EncuestaComponent},
  {path: 'login', component:InicioSesionComponent},
  {path: 'new-account', component:NewAccountComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
