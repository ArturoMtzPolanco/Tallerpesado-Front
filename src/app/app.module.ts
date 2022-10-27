import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/admin/home/home.component';
import {RoutesModule} from "./routes/routes.module";
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/login/register/register.component';
import { StudentHomeComponent } from './views/student/student-home/student-home.component';
import { HeaderStudentComponent } from './views/student/layout/header-student/header-student.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { MaestrosComponent } from './views/admin/crud/maestros/maestros.component';
import { AlumnosComponent } from './views/admin/crud/alumnos/alumnos.component';
import { MaterialesComponent } from './views/admin/crud/materiales/materiales.component';
import { AdminHeaderComponent } from './views/admin/layout/admin-header/admin-header.component';
import { AddMaestroComponent } from './views/admin/crud/maestros/add/add-maestro.component';
import { RequestDetailComponent } from './views/admin/request-detail/request-detail.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,

    StudentHomeComponent,
    HeaderStudentComponent,
    MaestrosComponent,
    AlumnosComponent,
    MaterialesComponent,
    AdminHeaderComponent,
    AddMaestroComponent,
    RequestDetailComponent,


  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'solicitud/:id_solicitud',
        component: RequestDetailComponent}
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
