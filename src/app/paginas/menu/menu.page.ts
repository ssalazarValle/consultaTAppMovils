import { DbProvider } from './../../services/DbProvider/db-provider.service';
import { MenuModel } from './menu-model';
import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = MenuModel.pages;

  selectedPath = '';
  constructor(
    public nativeStorage: DbProvider,
    public router: Router,
    private alertCtrl: AlertController) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['']);
  }

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Cerrar sesión',
      message: '¿Seguro que desea cerrar sesión?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Cerrado de sesión cancelado');
          }
        }, {
          text: 'Si',
          handler: () => {
            const token = 'token';
            this.nativeStorage.remove(token);
            console.log('Cerrando sesión...');
            this.logout();
          }
        }
      ]
    });
    await alert.present();
  }
}