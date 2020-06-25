import { Router } from '@angular/router';
import { DataService } from './../../services/data-service/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  details: any;

  constructor(
    private dataService: DataService,
    private router: Router
  ) {
  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.details = this.dataService.getDetails();
    console.log('details: ', this.details)
  }


  closeDetail() {
    this.router.navigate(['/menu/home']);
  }

}

