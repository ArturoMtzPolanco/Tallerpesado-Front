import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Maestro} from "../../model/Maestro";
import {Observable} from "rxjs";
import {Materiales} from "../../model/Materiales";

@Injectable({
  providedIn: 'root'
})
export class MaestrosService {

  private LIST = "http://localhost:8082/maestros/list";
  private ADD = "http://localhost:8082/maestros/add"

  constructor(private httpCLient: HttpClient) { }

  getMaestros(){
    return this.httpCLient.get(this.LIST)
  }

  //post para agregar producto
  addMaestros(maestro: Maestro):Observable<Object>{
    return this.httpCLient.post(this.ADD, maestro);
  }

}
