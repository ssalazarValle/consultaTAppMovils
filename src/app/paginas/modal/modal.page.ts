import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  count: number;
  titleArchivo: string;
  url: any;
  typeModal: string;
  errorMessage: any;

  constructor(
    private modalController: ModalController,
    private params: NavParams,
  ) { }

  ngOnInit() {

  }


  ionViewDidEnter() {
    this.titleArchivo = this.params.get('folioFiscal');
    this.typeModal = this.params.get('modalPage');
    this.errorMessage = this.params.get('errorMessages');
    console.log('modal: ', this.errorMessage)
  }

  closeModel() {
    this.modalController.dismiss();
  }

  downloadPDF(folioArchivo) {
    this.url = `https://portal.facturaxion.com/DescargaCfdi/HandlerCfdi.ashx?UUID=${folioArchivo}&tipoArchivo=PDF&esDescarga=1&procedencia=1`;
    window.open(this.url);
  }

  downloadXML(folioArchivo) {
    this.url = `https://portal.facturaxion.com/DescargaCfdi/HandlerCfdi.ashx?UUID=${folioArchivo}&tipoArchivo=XML&esDescarga=1&procedencia=1`;
    window.open(this.url);
  }
}
