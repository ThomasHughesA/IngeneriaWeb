import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { event } from 'jquery';
import jQuery = require('jquery');
const $:JQueryStatic=jQuery;



@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})



export class InicioSesionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


