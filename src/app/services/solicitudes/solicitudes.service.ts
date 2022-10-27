import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Solicitudes} from "../../model/Solicitudes";
import {Observable} from "rxjs";
import {Materiales} from "../../model/Materiales";

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  private CURL = "http://localhost:8082/solicitud/list";

  private ADD = "http://localhost:8082/solicitud/add";


  constructor(private httpCLient: HttpClient) { }

  getSolicitudes(){
    return this.httpCLient.get(this.CURL);
  }
  //post para agregar producto
  addSolicitudes(solicitudes: Solicitudes):Observable<Object>{
    return this.httpCLient.post(this.ADD, solicitudes);
  }

}
