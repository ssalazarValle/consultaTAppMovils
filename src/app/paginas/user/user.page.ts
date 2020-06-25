import { DataHome } from './../../models/home-model';
import { Component, OnInit } from '@angular/core';
import { ConfiguracionUsuario } from 'src/app/models/datos-usuario';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  cards = DataHome.CardsContent;
  
  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
    }, 500);
  }


}
