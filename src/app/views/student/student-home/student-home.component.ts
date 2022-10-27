import { Component, OnInit } from '@angular/core';

import {MaestrosService} from "../../../services/maestros/maestros.service";
import {Maestro} from "../../../model/Maestro";
import {Router} from "@angular/router";
import {CarrerasService} from "../../../services/carreras/carreras.service";
import {MaterialService} from "../../../services/materiales/material.service";
import {SolicitudesService} from "../../../services/solicitudes/solicitudes.service";
import {AlumnosService} from "../../../services/alumnos/alumnos.service";

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {


 maestros: any;
 carreras: any;
 materiales: any;
 alumnos: any;


  constructor(
    private maestrosService: MaestrosService,
    private carrerasService: CarrerasService,
    private materialService : MaterialService,
    private solicitudesService: SolicitudesService,
    private alumnoService: AlumnosService,
    private router:Router,
    ) {}


  ngOnInit(): void {
    this.getMaestros()
    this.getCarreras()
    this.getMateriales()
    this.getAlumnos()
  }

  private getMaestros() {
    this.maestrosService.getMaestros().subscribe(data => {
      this.maestros = data;
    });
  }
  private getCarreras() {
      this.carrerasService.getCarreras().subscribe(data => {
        this.carreras = data;
      });

}
  private getMateriales() {
    this.materialService.getMateriales().subscribe(data => {
      this.materiales = data;
    });

  }

  private getAlumnos() {
    this.alumnoService.getAlumnos().subscribe(data => {
      this.alumnos = data;
    });

  }


  addSolicitudes(datas:any)
  {
    console.warn(datas)
    this.solicitudesService.addSolicitudes(datas).subscribe((results) =>{
      //this.redirectToSuccessPage();
      console.warn(results);
      window.alert("Solicitud Enviada Correctamente");
    });
  }
}
