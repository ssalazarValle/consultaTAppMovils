import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PasswordChangeService } from './../../services/password-change.ts/password-change.service';
import { PasswordRecovery } from './../../models/modal-password';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.page.html',
  styleUrls: ['./password-recovery.page.scss'],
})
export class PasswordRecoveryPage implements OnInit {
  recoveryForms: FormGroup;
  checkList = PasswordRecovery.CheckInputs;
  controls: boolean;
  controlActivo: string;
  constructor(
    private fb: FormBuilder,
    private changePassword: PasswordChangeService,
    private alertCtrl: AlertController,
    private route: Router
  ) {
    this.recoveryForms = this.fb.group({
      user: ['', Validators.compose([])],
    });
  }

  ngOnInit() {
  }

  segmentChanged(event) {
    this.controlActivo = event.target.value;
    this.controls = true;
  }

  enviarCorreo() {
    switch (this.controlActivo) {
      case 'noRecuerdo':
        if (this.recoveryForms.controls.user.status === 'VALID') {
          this.changePassword.changePasswordNR().subscribe((response) => {
            this.presentOk('Se envió un correo electronico');
          });
        }

        this.route.navigate(['login']);
        break;
      case 'inactividad':
        if (this.recoveryForms.controls.user.status === 'VALID') {
          this.changePassword.changePasswordIN().subscribe((response) => {
            this.presentOk('Se envió un correo electronico');
          });
        }
        this.route.navigate(['login']);
        break;
      case 'caduco':
        if (this.recoveryForms.controls.user.status === 'VALID') {
          this.changePassword.changePassword().subscribe((response) => {
            this.presentOk('Se envió un correo electronico');
          });
        }
        this.route.navigate(['login']);
        break;
    }
  }

  async presentOk(estatus) {
    const alert = await this.alertCtrl.create({
      header: 'Ocurrió un error!',
      message: estatus,
      buttons: ['Ok']
    })
    await alert.present();

  }

}
