import { DataService } from './../../services/data-service/data-service.service';
import { ConfiguracionBusquedas } from './../../models/datos-busqueda';
import { FormBuilder, FormGroup, Validators, NgControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})

export class FiltersPage implements OnInit {
  filtersForm: FormGroup;
  estatusFacturas = ConfiguracionBusquedas.estatusFactura;
  inputsData = ConfiguracionBusquedas.inputData;
  versionFactura = ConfiguracionBusquedas.versiones;
  variable: string;
  arrayFilters: any;
  findByFilter: {};

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {
    this.filtersForm =  this.fb.group({
      statusFactura: ['', Validators.compose([])],
      versionFactura: ['', Validators.compose([])],
      fecha: ['', Validators.compose([])],
      fechaFinal: ['', Validators.compose([])],
      rfc: ['', Validators.compose([])],
      folioFiscal: ['', Validators.compose([])],
      folio: ['', Validators.compose([])],
      serie: ['', Validators.compose([])],
    });
  }

  ngOnInit() {
    this.arrayFilters = [];
  }

  setFilters() {
    const dateInicio = new Date(this.filtersForm.controls.fecha.value);
    const dateFin = new Date(this.filtersForm.controls.fechaFinal.value);

    const mesInicio = dateInicio.getMonth() + 1;
    const anioInicio =  dateInicio.getFullYear();
    const diaInicio = dateInicio.getDate();
    let mesTxtInicio = mesInicio.toString();
    let diaTxtInicio = diaInicio.toString();

    const mesFin = dateFin.getMonth() + 1;
    const anioFin =  dateFin.getFullYear();
    const diaFin = dateFin.getDate();
    let mesTxtFin = mesFin.toString();
    let diaTxtFin = diaFin.toString();


    console.log('dateInicio: ', dateInicio , ' dateFin: ', dateFin)


    this.findByFilter = {
      rfcreceptor: this.filtersForm.controls.rfc.value,
      version: this.filtersForm.controls.versionFactura.value.trim(),
      fechaTimbradoInicial: `${anioInicio}-${mesInicio < 10  ? mesTxtInicio = '0'+ mesInicio : mesInicio}-${diaInicio < 10 ? diaTxtInicio = '0'+ diaTxtInicio : diaInicio}`,
      fechaTimbradoFinal: `${anioFin}-${mesFin < 10 ? mesTxtFin = '0'+ mesTxtFin : mesFin}-${diaFin < 10 ? diaTxtFin = '0'+ diaTxtFin : diaFin}`,
      folioFiscal: this.filtersForm.controls.folioFiscal.value,
      EstatusCfdi: this.filtersForm.controls.statusFactura.value,
      folio: this.filtersForm.controls.folio.value,
      serie: this.filtersForm.controls.serie.value
    };

    console.log('filtrar por datos: ', this.findByFilter)
    this.dataService.steFindFilters(this.findByFilter);
    this.dataService.setfilters(this.arrayFilters);
    this.router.navigate(['/menu/home']);
  }

  closeFilter(valor, formControl) {
    this.arrayFilters.pop({value: valor});
    formControl.setValue('');
    // console.log('value: ', this.arrayFilters)
  }

  onChange(event) {
   if (this.filtersForm.controls[event].status === 'VALID') {
      this.variable = this.filtersForm.controls[event].value;
      this.arrayFilters.push({value: this.variable, formControl: this.filtersForm.controls[event]});
      console.log('array filters: ', this.arrayFilters);
   }
  }

}
