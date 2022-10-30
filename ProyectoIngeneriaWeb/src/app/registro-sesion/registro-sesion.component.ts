import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-sesion',
  templateUrl: './registro-sesion.component.html',
  styleUrls: ['./registro-sesion.component.scss']
})



export class RegistroSesionComponent implements OnInit {

  usuario:FormGroup;

  constructor(public form:FormBuilder) {
    this.usuario=form.group({
      "nombre-usuario":['',Validators.required],
      "correo-usuario":['',Validators.email],
      "contraseña-usuario":['',Validators.required]

    });
  }

  ngOnInit(): void {
  }
  validacion(){
    console.log(this.usuario.value);
  }

}
