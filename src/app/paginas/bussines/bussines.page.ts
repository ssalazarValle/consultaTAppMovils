import { ConfiguracionEmpresas } from './../../models/datos-empresa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bussines',
  templateUrl: './bussines.page.html',
  styleUrls: ['./bussines.page.scss'],
})
export class BussinesPage implements OnInit {
  empresas = ConfiguracionEmpresas.datosEmpresas;

  constructor() { }

  ngOnInit() {
  }

}
