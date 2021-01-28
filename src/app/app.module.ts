import { BrowserModule } from '@angular/platform-browser';

// Librerias de *NgFor *NgIf *NgSwitch *NgStyle
import { NgModule } from '@angular/core';

// Librerias de rutas de navegación de Angular
import { AppRoutingModule } from './app-routing.module';

// Componentes o Vistas de Angular
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './views/bienvenida/bienvenida.component';
import { ChartsModule } from 'ng2-charts'

//  Libreria para peticiones al BackEnd/Servidor
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './shared/navbar/navbar.component'; 

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
