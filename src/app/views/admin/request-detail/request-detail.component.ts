import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  id_solicitud = 13;


  constructor(private _route: ActivatedRoute) {
    console.log(this._route.snapshot.paramMap.get('id_solicitud'))
  }

  ngOnInit(): void{



  }

}
