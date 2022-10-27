import { Component, OnInit } from '@angular/core';
import {Solicitudes} from "../../../model/Solicitudes";
import {SolicitudesService} from "../../../services/solicitudes/solicitudes.service";
import {CarrerasService} from "../../../services/carreras/carreras.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  solicitudes: any;
  carreras:any;


  constructor(private solicitudesService: SolicitudesService,
              private carrerasService: CarrerasService) {

  }

  ngOnInit(): void {
    this.getSolicitudes()
    this.getCarreras()
  }

  private getSolicitudes(){
    this.solicitudesService.getSolicitudes().subscribe(data=>{
      this.solicitudes = data;
    });
  }

  private getCarreras() {
    this.carrerasService.getCarreras().subscribe(data => {
      this.carreras = data;
    });

}}
