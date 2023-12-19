import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

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
import { FicheComponent } from './fiche/fiche.component';
import { PersonneComponent } from './personne/personne.component';
import { ListerFicheComponent } from './lister-fiche/lister-fiche.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    ForbiddenComponent,
    HeaderComponent,
    HomeComponent,LoginComponent, VehiculeComponent, FicheComponent, PersonneComponent, ListerFicheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
HttpClientModule,
    RouterModule
  ],
  providers: [

    AuthGuard,{
    provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
