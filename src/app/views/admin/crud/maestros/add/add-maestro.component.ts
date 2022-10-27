import { Component, OnInit } from '@angular/core';
import {MaestrosService} from "../../../../../services/maestros/maestros.service";

@Component({
  selector: 'app-add-maestro',
  templateUrl: './add-maestro.component.html',
  styleUrls: ['./add-maestro.component.css']
})
export class AddMaestroComponent implements OnInit {


  maestros: any; 

  constructor(private maestrosService: MaestrosService) { }

  ngOnInit(): void {
  }


  addMaestros(datas:any)
  {
    console.warn(datas)
    this.maestrosService.addMaestros(datas).subscribe((results) =>{
      //this.redirectToSuccessPage();
      console.warn(results);
      window.alert("Maestro Agregado Correctamente");
    });
  }

}
