import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable, EMPTY } from 'rxjs';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { retryWhen, delay, take, tap, map, catchError, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingCtrl.getTop().then(hasLoading => {
      if(!hasLoading) {
        this.loadingCtrl.create({
          spinner: 'circular',
          translucent: true
        }).then(loading => loading.present());
      }
    });

    return next.handle(request).pipe(
      retryWhen(err => {
        let retries = 1;
        return err.pipe(
          delay(1000),
          tap(() => {
            this.retryToast(retries);
          }),
          map(err => {
            if (retries++ === 2) {
              throw err;
            }
            return err;
          })
        )
      }),
      catchError(err => {
        console.log('error: ', err);
        this.presentFailedError(err.error['errorMessage']);
        return EMPTY;
      }),
      finalize(() => {
       this.loadingCtrl.getTop().then(hasLoading => {
         if(hasLoading) {
           this.loadingCtrl.dismiss();
         }
       })
      })
    )
  }

  async retryToast(retries) {
   const toast = await this.toastCtrl.create({
     message: `Reintentar: ${retries}/2`,
     duration: 1000
   });
   toast.present();
  }

  async presentFailedError(error) {
    const alert = await this.alertCtrl.create({
      header: '¡Ocurrió un error!',
      message: error,
      buttons: ['Ok']
    })
    await alert.present();

  }
}
