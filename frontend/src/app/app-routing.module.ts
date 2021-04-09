
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthGuardAdmin } from './authAdmin.guard';
import { BienvenidaComponent } from './views/bienvenida/bienvenida.component';
import { EncuestaComponent } from './views/encuesta/encuesta.component';
import { GraphicsComponent } from './views/graphics/graphics.component';
import { InicioSesionComponent } from './views/inicio-sesion/inicio-sesion.component';
import { NewAccountComponent } from './views/new-account/new-account.component';

const routes: Routes = [
  {path: 'encuesta', component:EncuestaComponent, canActivate:[AuthGuard]},
  {path: 'login', component:InicioSesionComponent},
  {path: 'bienvenida', component:BienvenidaComponent},
  {path: 'new-account', component:NewAccountComponent},
  {path: 'graphics', component:GraphicsComponent, canActivate:[AuthGuardAdmin]},
  {path: '', redirectTo:'bienvenida', pathMatch: 'full'},
  {path: '**',  pathMatch:'full', redirectTo:'bienvenida'},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
