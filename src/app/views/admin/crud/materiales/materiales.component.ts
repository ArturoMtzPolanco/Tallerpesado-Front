import { Component, OnInit } from '@angular/core';
import {MaestrosService} from "../../../../services/maestros/maestros.service";
import {MaterialService} from "../../../../services/materiales/material.service";


@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {

  materiales: any;

  constructor(private materialService: MaterialService) { }

  ngOnInit(): void {
    this.getMateriales()
  }

  private getMateriales() {
    this.materialService.getMateriales().subscribe(data => {
      this.materiales = data;
    });
  }

  adddMaterial(datas:any)
  {
    console.warn(datas)
    this.materialService.addMaterial(datas).subscribe((results) =>{
      //this.redirectToSuccessPage();
      console.warn(results);
      window.alert("Material Agregado Correctamente");
    });
  }



}
