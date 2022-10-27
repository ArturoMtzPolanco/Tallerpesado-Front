import { Component, OnInit } from '@angular/core';
import {AlumnosService} from "../../../../services/alumnos/alumnos.service";

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos: any;

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.getAlumnos()
  }

  private getAlumnos(){
    this.alumnosService.getAlumnos().subscribe(data =>{
      this.alumnos = data;
    });
  }

}
