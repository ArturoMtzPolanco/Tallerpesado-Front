import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

 private LIST = 'http://localhost:8082/alumnos/list';

  constructor( private httpClient: HttpClient) {}

getAlumnos(){
    return this.httpClient.get(this.LIST)
}


}
