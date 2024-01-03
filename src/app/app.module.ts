import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AuthInterceptor} from "./_auth/auth.interceptor";
import { AuthGuard } from './_auth/auth.guard';
import {UserService} from "./_services/user.service";
import { VehiculeComponent } from './vehicule/vehicule.component';
import { PersonneComponent } from './personne/personne.component';
import { ListerFicheComponent } from './lister-fiche/lister-fiche.component';
import { AjouterTerrainComponent } from './ajouter-terrain/ajouter-terrain.component';
import { ListerPoliceTerrainComponent } from './lister-police-terrain/lister-police-terrain.component';
import { ListerVehiculeComponent } from './lister-vehicule/lister-vehicule.component';
import { ListerPersonneComponent } from './lister-personne/lister-personne.component';
import { FicheComponent } from './fiche/fiche.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { WebSocketServiceService } from './_services/web-socket-service.service';

const config: SocketIoConfig = { url: 'http://127.0.0.1:5000', options: {} };

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    ForbiddenComponent,
    HeaderComponent,
    HomeComponent,LoginComponent, VehiculeComponent, FicheComponent, PersonneComponent, ListerFicheComponent, AjouterTerrainComponent, ListerPoliceTerrainComponent, ListerVehiculeComponent, ListerPersonneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [

    AuthGuard,{
    provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService,
    provideClientHydration(),
    WebSocketServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
