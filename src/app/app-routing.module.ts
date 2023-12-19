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

const  routes: Routes=[
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:'user',component:UserComponent,canActivate:[AuthGuard],data:{roles:['User']}},
  {path:'login',component:LoginComponent},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'fiche',component:FicheComponent},
  {path:'listerFiche',component:ListerFicheComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
