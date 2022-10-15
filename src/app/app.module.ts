import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/admin/home/home.component';
import {RoutesModule} from "./routes/routes.module";
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/login/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,


  ],
  imports: [
    BrowserModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
