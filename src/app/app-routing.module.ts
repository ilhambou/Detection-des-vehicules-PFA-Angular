import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UserComponent} from "./user/user.component";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {AdminComponent} from "./admin/admin.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./_auth/auth.guard";
import {FicheComponent} from "./fiche/fiche.component";
import {ListerFicheComponent} from "./lister-fiche/lister-fiche.component";
import {AjouterTerrainComponent} from "./ajouter-terrain/ajouter-terrain.component";
import {ListerPoliceTerrainComponent} from "./lister-police-terrain/lister-police-terrain.component";
import {PersonneComponent} from "./personne/personne.component";
import {VehiculeComponent} from "./vehicule/vehicule.component";
import {ListerVehiculeComponent} from "./lister-vehicule/lister-vehicule.component";
import {ListerPersonneComponent} from "./lister-personne/lister-personne.component";

const  routes: Routes=[
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:'user',component:UserComponent,canActivate:[AuthGuard],data:{roles:['User']}},
  {path:'login',component:LoginComponent},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'fiche',component:FicheComponent},
  {path:'listerFiche',component:ListerFicheComponent},
  {path:'ajouterPoliceT',component:AjouterTerrainComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:'listerPolice',component:ListerPoliceTerrainComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:'ajouterVehicule',component:VehiculeComponent,canActivate:[AuthGuard],data:{roles:['Admin','User']}},
  {path:'ajouterPersonne',component:PersonneComponent, canActivate:[AuthGuard],data:{roles:['Admin','User']}},
  {path:'listerVehicule',component:ListerVehiculeComponent, canActivate:[AuthGuard],data:{roles:['Admin','User']}},
  {path:'listerPersonne',component:ListerPersonneComponent, canActivate:[AuthGuard],data:{roles:['Admin','User']}},






];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
