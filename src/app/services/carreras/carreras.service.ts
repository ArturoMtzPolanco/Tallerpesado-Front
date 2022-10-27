import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

  private CURL = "http://localhost:8082/carreras/list";

  constructor(private httpCLient: HttpClient) { }

  getCarreras(){
    return this.httpCLient.get(this.CURL)
  }

}
