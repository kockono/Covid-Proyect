import { BrowserModule } from '@angular/platform-browser';

// Librerias de *NgFor *NgIf *NgSwitch *NgStyle
import { NgModule } from '@angular/core';

// Librerias de rutas de navegación de Angular
import { AppRoutingModule } from './app-routing.module';

// Componentes o Vistas de Angular
import { ChartsModule } from 'ng2-charts'
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './views/bienvenida/bienvenida.component';
import { EncuestaComponent } from './views/encuesta/encuesta.component';
import { NavadminComponent } from './shared/navadmin/navadmin.component';
import { NavuserComponent } from './shared/navuser/navuser.component';
import { NewAccountComponent } from './views/new-account/new-account.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { GraficasComponent } from './views/graficas/graficas.component';
import { InicioSesionComponent } from './views/inicio-sesion/inicio-sesion.component';

//  Libreria para peticiones al BackEnd/Servidor
import { AuthGuard } from './auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FooterComponent } from './shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TokenInterceptorService } from './services/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    NavbarComponent,
    GraficasComponent,
    InicioSesionComponent,
    FooterComponent,
    EncuestaComponent,
    NavadminComponent,
    NavuserComponent,
    NewAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [  AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
