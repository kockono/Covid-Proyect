import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './views/bienvenida/bienvenida.component';
import { EncuestaComponent } from './views/encuesta/encuesta.component';

const routes: Routes = [
  {path: '', component:BienvenidaComponent},
  {path: 'encuesta', component:EncuestaComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
