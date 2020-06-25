import { GET_MOVIMIENTOS } from './../../enviroments/endpoinds';
import { MovimientosService } from './../../services/movimientos/movimientos.service';
import { DataService } from './../../services/data-service/data-service.service';
import { Router } from '@angular/router';
import { DataHome } from './../../models/home-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  /* Nuevo diseño */
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  filtros = DataHome.imagesFilters;
  cards = DataHome.CardsContent;
  filtersUser: [];
  cardsContent: [];
  bodyFilters: {};

  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private dataService: DataService,
    private modalController: ModalController,
    private movimientos: MovimientosService
  ) { }

  async ngOnInit() {
    this.cardsContent = [];
    this.filtersUser = this.dataService.getFilters();


    const date = new Date();
    const primerDia = new Date(date.getFullYear(), date.getMonth(), 1);
    const ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const anio = primerDia.getFullYear();
    const mes = primerDia.getMonth() + 1;
    const diaInicio = primerDia.getDay();
    const diaFinal = ultimoDia.getDate();
    let mesTxt = mes.toString();
    let diaIniciotxt =  diaInicio.toString()
    /* fechaTimbradoInicial: `${anio}-${mes < 10 ? mesTxt = '0' + mes : mes}-${diaInicio
      < 10 ? diaIniciotxt = '0' + diaInicio : diaInicio}`, */

    const BODY = {
      EstatusCfdi: -1,
      folioFiscal: '',
      serie: '',
      folio: '',
      rfcreceptor: 'FOER670225GZ91',
      version: '3.3',
      fechaTimbradoInicial: `${anio}-01-${diaInicio < 10 ? diaIniciotxt = '0' + diaInicio : diaInicio}`,
      fechaTimbradoFinal: `${anio}-${mes < 10 ? mesTxt = '0' + mes : mes}-${diaFinal}`
    }
    this.obtenertDatos(BODY);
  }


  obtenertDatos(BODY) {
    this.movimientos.enviarComprobantes(BODY).subscribe((response) => {
      console.log('response: ', response )
      this.cardsContent =  response.value;
    }, (error) => {
      this.openModalError(error.message);
      console.log('r2.1: ', error)
    });
  }

  ionViewDidEnter() {
    this.bodyFilters = this.dataService.getFindFilters();
    console.log('bodyFilters: ', this.bodyFilters)
    if (this.bodyFilters !== undefined) {
      this.obtenertDatos(this.bodyFilters);
    }
    this.filtersUser = this.dataService.getFilters();
  }

  onClick() {
    this.menuCtrl.toggle();
  }

  filtersClean() {
    this.filtersUser = [];
  }

  goToAction(url: string) {
    if (url === 'limpiar') {
      this.filtersUser = [];
    } else {
      this.router.navigate([url]);
    }
  }

  closeFilter(formControl) {
    formControl.setValue('');
    // this.filtersUser.pop({ 'value': valor })
    console.log('value: ', this.filtersUser)
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
    }, 500);
  }

  async openModal(folio) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'modal-descarga',
      componentProps: {
        folioFiscal: folio,
        modalPage: 'descargaComprobantes'
      }
    });
    return await modal.present();
  }

  async openModalError(error) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'modal-error',
      componentProps: {
        errorMessages: error,
        modalPage: 'errorModal'
      }
    });
    return await modal.present();
  }


  gotDetail(detail) {
    const dataDetail =  new Array();
    dataDetail.push(detail)
    this.dataService.setDetail(dataDetail);
    this.router.navigate(['/menu/detail']);
  }
}
