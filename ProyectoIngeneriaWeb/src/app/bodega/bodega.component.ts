import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.scss']
})
export class BodegaComponent implements OnInit {

  producto:FormGroup;
  constructor(public form:FormBuilder) {
    this.producto=form.group({
      "id-producto":["",Validators.required],
      "nombre-producto":["",Validators.required],
      "precio-producto":["",Validators.required]
    });
   }

  ngOnInit(): void {
  }

}
