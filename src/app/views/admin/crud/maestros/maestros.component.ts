import { Component, OnInit } from '@angular/core';
import {MaestrosService} from "../../../../services/maestros/maestros.service";

@Component({
  selector: 'app-maestros',
  templateUrl: './maestros.component.html',
  styleUrls: ['./maestros.component.css']
})
export class MaestrosComponent implements OnInit {

  maestros: any;

  constructor(private maestrosService: MaestrosService) { }

  ngOnInit(): void {
    this.getMaestros()
  }

  private getMaestros() {
    this.maestrosService.getMaestros().subscribe(data => {
      this.maestros = data;
    });
  }



}
