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
import { InicioSesionComponent } from './views/inicio-sesion/inicio-sesion.component';

//  Libreria para peticiones al BackEnd/Servidor
import { AuthGuard } from './auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import the injector module and the HTTP client module from Angular
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FooterComponent } from './shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { GraphicsComponent } from './views/graphics/graphics.component';


// Import the HTTP interceptor from the Auth0 Angular SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    NavbarComponent,
    InicioSesionComponent,
    FooterComponent,
    EncuestaComponent,
    NavadminComponent,
    NavuserComponent,
    NewAccountComponent,
    GraphicsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AuthModule.forRoot({
      domain: 'dev-vg58e-nr.us.auth0.com',
      clientId: 'E40VlcW2ImNhbJPqaPDsW8wPovdDzS9O',
       // Request this audience at user authentication time
       audience: "https://dev-vg58e-nr.us.auth0.com/api/v2/",

      // Request this scope at user authentication time
      scope: "read:current_user",

  // Specify configuration for the interceptor              
  httpInterceptor: {
    allowedList: [
      {
        uri: 'https://dev-vg58e-nr.us.auth0.com/api/v2/*',
        tokenOptions: {
          // The attached token should target this audience
          audience: 'https://dev-vg58e-nr.us.auth0.com/api/v2/',

          // The attached token should have these scopes
          scope: 'read:current_user'
        }
      }
    ]
  }
    }),
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
