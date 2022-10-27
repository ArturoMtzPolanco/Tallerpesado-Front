import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../views/admin/home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./login/register/register.component";
import {StudentHomeComponent} from "../views/student/student-home/student-home.component";
import * as path from "path";
import {MaestrosService} from "../services/maestros/maestros.service";
import {MaestrosComponent} from "../views/admin/crud/maestros/maestros.component";
import {AlumnosComponent} from "../views/admin/crud/alumnos/alumnos.component";
import {MaterialesComponent} from "../views/admin/crud/materiales/materiales.component";
import {AddMaestroComponent} from "../views/admin/crud/maestros/add/add-maestro.component";
import {RequestDetailComponent} from "../views/admin/request-detail/request-detail.component";
import {ActivatedRoute} from "@angular/router";

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent
  },


  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register-teacher',
    component: RegisterComponent
  },

  {
    path: 'solicitudes',
    component: StudentHomeComponent
  },
  {
    path: 'maestros',
    component: MaestrosComponent
  },
  {
    path: 'alumnos',
    component: AlumnosComponent
  },
  {
    path: 'materiales',
    component: MaterialesComponent
  },
  {
    path: 'maestros/add',
    component: AddMaestroComponent

  },
  {
    path: 'solicitud/:id_solicitud',
    component: RequestDetailComponent
  },
  {
    path:'**',
    redirectTo: '/'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutesModule { }

