import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  userHide = true;
  userError = '';
  passHide = true;
  passError = '';
  private shouldSend = true;
  typeInputPassword: string = 'password';
  iconEye: string = 'lock-closed-outline';

  datos = { header: '¡Felicitaciones!', message: 'Ya eres parte de', img: '../../../assets/Sprint-1-Assest/Popup/logo-popup@72x-100.svg' }
  errorLogin: string;
  loginUser: { };
  data: any;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private auth: AuthService
  ) {
    this.loginForm = this.fb.group({
      user: [null, Validators.compose([
        Validators.maxLength(70),
        Validators.required,
        ])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      validateForm: [false, Validators.compose([Validators.requiredTrue])],
    });
  }

  ngOnInit() {
  }


  ionViewDidEnter() {
    this.loginForm.controls.password.setValue('');
    this.loginForm.controls.user.setValue('');
  }

  checkPassword() {
    if (!(this.loginForm.controls.password.valid)) {
      this.passHide = false;
      if (this.loginForm.controls.password.hasError('required')) {
        this.passError = 'La contraseña es requerida';
      } else if (this.loginForm.controls.password.hasError('minlength')) {
        this.passError = 'La contraseña debe tener mínimo 8 caracteres';
      }
    } else {
      this.passHide = true;
    }
  }

  changePassword() {
    this.router.navigate(['password-recovery']);
  }


  login() {
  this.errorLogin = '';
  if (this.loginForm.controls['user'].valid && this.loginForm.controls['password'].valid ) {
    this.loginUser = {
      Cuenta: this.loginForm.controls.user.value,
      Contrasena: this.loginForm.controls.password.value,
    };
    this.auth.login(this.loginUser).subscribe((response) => {
        console.log(`[TOKEN] Successful ${response}`);
        this.router.navigate(['/menu/home']);
    }, (error) => {
      this.errorLogin = 'Tu usuario y/o contraseña no son correctos, inténtalo de nuevo';
        console.log(`[TOKEN ERROR] ${error}`);
    });
  }
  }

  showPassword() {
    this.typeInputPassword  =  this.typeInputPassword === 'password' ? 'text' : 'password';
    this.iconEye =  this.iconEye === 'lock-closed-outline' ? 'lock-open-outline' : 'lock-closed-outline';
  }

  regirtro() {
    /* this.data.setRegistryTwoForm(this.newForm()); */
    this.router.navigate(['registroUno']);
  }

}
