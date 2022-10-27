import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Materiales} from "../../model/Materiales";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private LIST = "http://localhost:8082/materiales/list";

  private ADD = "http://localhost:8082/materiales/add";

  constructor(private httpCLient: HttpClient) {
  }

  //get para materiales
  getMateriales() {
    return this.httpCLient.get(this.LIST)
  }

  //post para agregar producto
  addMaterial(material:Materiales):Observable<Object>{
    return this.httpCLient.post(this.ADD, material);
  }

}

